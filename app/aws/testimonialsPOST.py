import boto3
import uuid
import json
import base64
from datetime import datetime
import pytz # type: ignore

def is_base64(s):
    try:
        decoded = base64.b64decode(s)
        decoded.decode('utf-8')
        return True
    except Exception:
        return False

def get_sa_time():
    utc_now = datetime.utcnow()
    sa_timezone = pytz.timezone('Africa/Johannesburg')
    utc_timezone = pytz.UTC
    utc_now = utc_timezone.localize(utc_now)
    sa_time = utc_now.astimezone(sa_timezone)
    return sa_time.isoformat(timespec='seconds')

def lambda_handler(event, context):
    print('Received event:', event)
    
    CORS_HEADERS = {
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
        'Access-Control-Allow-Methods': 'OPTIONS,POST',
        'Access-Control-Allow-Credentials': 'true',
        'Content-Type': 'application/json'
    }

    # Handle OPTIONS request for CORS
    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': CORS_HEADERS,
            'body': ''
        }

    try:
        # Determine if this is a test event or API Gateway event
        is_test_event = isinstance(event, dict) and all(key in event for key in ['name', 'email', 'message'])
        
        # Get the data either from test event or request body
        if is_test_event:
            data = event
        else:
            body = event.get('body', '')
            if is_base64(body):
                data = json.loads(base64.b64decode(body).decode('utf-8'))
            else:
                data = json.loads(body)

        # Create item
        item = {
            'id': str(uuid.uuid4()),
            'date_added': get_sa_time(),
            'name': data.get('name'),
            'email': data.get('email'),
            'position': data.get('position'),
            'company': data.get('company'),
            'image': data.get('image', ''),
            'message': data.get('message')
        }

        # Validate required fields
        required_fields = ['name', 'email', 'message', 'company', 'position']
        missing_fields = [field for field in required_fields if not item.get(field)]
        
        if missing_fields:
            return {
                'statusCode': 400,
                'headers': CORS_HEADERS,
                'body': json.dumps({
                    'error': f'Missing required fields: {", ".join(missing_fields)}'
                })
            }

        # Save to DynamoDB
        dynamodb = boto3.resource('dynamodb', region_name='af-south-1')
        table = dynamodb.Table('fabian-portfolio-testimonials')
        table.put_item(Item=item)

        return {
            'statusCode': 200,
            'headers': CORS_HEADERS,
            'body': json.dumps({
                'message': 'Testimonial added successfully',
                'item': item
            })
        }

    except Exception as e:
        print(f'Error processing request: {str(e)}')
        import traceback
        print('Traceback:', traceback.format_exc())
        
        return {
            'statusCode': 500,
            'headers': CORS_HEADERS,
            'body': json.dumps({
                'error': 'Server error',
                'details': str(e)
            })
        }