import boto3
import uuid
import json
import base64
from datetime import datetime
import pytz # type: ignore


# Working lambda function for contacts page. 
# Challenge: Setting up CORS for the OPTIONS Method was a real headache.
def is_base64(s):
    """Check if a string is base64 encoded"""
    try:
        decoded = base64.b64decode(s)
        decoded.decode('utf-8')
        return True
    except Exception:
        return False

def get_sa_time():
    """Get current time in South Africa"""
    utc_now = datetime.utcnow()
    sa_timezone = pytz.timezone('Africa/Johannesburg')
    utc_timezone = pytz.UTC
  
    # Make the UTC time aware of its timezone
    utc_now = utc_timezone.localize(utc_now)
  
    # Convert to South African time
    sa_time = utc_now.astimezone(sa_timezone)
    return sa_time.isoformat(timespec='seconds')

def lambda_handler(event, context):
    print('Event:', event)  # Debug logging
    
    CORS_HEADERS = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
        'Access-Control-Allow-Methods': 'OPTIONS, POST, GET'
    }

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': CORS_HEADERS,
            'body': json.dumps({'message': 'Hello from OPTIONS /Contacts'})
        }

    try:
        # Handle the request body
        if isinstance(event, dict):
            if 'body' in event:
                body_str = event['body']
                print('Original body:', body_str)
                
                if is_base64(body_str):
                    try:
                        decoded_str = base64.b64decode(body_str).decode('utf-8')
                        print('Decoded body:', decoded_str)
                        body = json.loads(decoded_str)
                    except Exception as e:
                        print(f'Error decoding base64: {str(e)}')
                        return {
                            'statusCode': 400,
                            'headers': CORS_HEADERS,
                            'body': json.dumps({
                                'error': 'Invalid base64 encoded JSON',
                                'details': str(e)
                            })
                        }
                else:
                    try:
                        body = json.loads(body_str)
                    except json.JSONDecodeError as e:
                        print(f'Error decoding JSON: {str(e)}')
                        return {
                            'statusCode': 400,
                            'headers': CORS_HEADERS,
                            'body': json.dumps({
                                'error': 'Invalid JSON format',
                                'details': str(e)
                            })
                        }
            else:
                body = event
        else:
            return {
                'statusCode': 400,
                'headers': CORS_HEADERS,
                'body': json.dumps({
                    'error': 'Invalid request format'
                })
            }

        # Initialize DynamoDB
        dynamodb = boto3.resource('dynamodb', region_name='af-south-1')
        table = dynamodb.Table('fabian-portfolio-contacts')

        # Create item with South African time
        item = {
            'id': str(uuid.uuid4()),
            'date_added':get_sa_time(),
            'username': body.get('username'),
            'email': body.get('email'),
            'message': body.get('message')
        }

        # Validate required fields
        required_fields = ['username', 'email', 'message']
        missing_fields = [field for field in required_fields if not item.get(field)]
        
        if missing_fields:
            return {
                'statusCode': 400,
                'headers': CORS_HEADERS,
                'body': json.dumps({
                    'error': f'Missing required fields: {", ".join(missing_fields)}'
                })
            }

        # Add item to DynamoDB
        table.put_item(Item=item)

        return {
            'statusCode': 200,
            'headers': CORS_HEADERS,
            'body': json.dumps({
                'message': 'ContactMessage successfully send',
                'item': item
            })
        }

    except Exception as e:
        print(f'Unexpected error: {str(e)}')
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
        
        