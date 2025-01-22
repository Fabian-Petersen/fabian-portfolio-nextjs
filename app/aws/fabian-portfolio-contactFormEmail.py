import boto3
import json
from botocore.exceptions import ClientError
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import os

def create_user_email(user_name):
    """Create custom email content for user"""
    html_content = f"""
    <html>
        <body>
            <h2>Hello {user_name},</h2>
            <p>Thank you for reaching out! I've received your message and will get back to you shortly.</p>
            <p>Best regards,<br>Fabian</p>
        </body>
    </html>
    """
    
    text_content = f"""
    Hello {user_name},
    
    Thank you for reaching out! I've received your message and will get back to you shortly.
    
    Best regards,
    Fabian
    """
    
    return html_content, text_content

def create_admin_notification(sender_name, sender_email, message):
    """Create notification email for admin"""
    html_content = f"""
    <html>
        <body>
            <h2>New Contact Form Submission</h2>
            <p><strong>From:</strong> {sender_name}</p>
            <p><strong>Email:</strong> {sender_email}</p>
            <p><strong>Message:</strong></p>
            <p>{message}</p>
        </body>
    </html>
    """
    
    text_content = f"""
    New Contact Form Submission
    
    From: {sender_name}
    Email: {sender_email}
    Message:
    {message}
    """
    
    return html_content, text_content

def send_ses_email(ses_client, source, destination, subject, html_content, text_content, reply_to=None):
    """Send email using SES"""
    msg = MIMEMultipart('alternative')
    msg['Subject'] = subject
    msg['From'] = source
    msg['To'] = destination
    if reply_to:
        msg['Reply-To'] = reply_to
    
    msg.attach(MIMEText(text_content, 'plain'))
    msg.attach(MIMEText(html_content, 'html'))
    
    return ses_client.send_raw_email(
        Source=source,
        Destinations=[destination],
        RawMessage={'Data': msg.as_string()}
    )

def lambda_handler(event, context):
    ses_client = boto3.client('ses', region_name='af-south-1')
    admin_email = os.environ['ADMIN_EMAIL']
    
    try:
        data = event if isinstance(event, dict) else json.loads(event)
        sender_name = data.get('username', 'User')
        sender_email = data.get('email')
        message = data.get('message', '')

        if not sender_email:
            raise ValueError("Email address is required")

        # Send confirmation to user
        user_html, user_text = create_user_email(sender_name)
        send_ses_email(
            ses_client,
            admin_email,
            sender_email,
            "Thank you for your message",
            user_html,
            user_text
        )

        # Send notification to admin
        admin_html, admin_text = create_admin_notification(sender_name, sender_email, message)
        send_ses_email(
            ses_client,
            admin_email,
            admin_email,
            f"New Contact Form Submission from {sender_name}",
            admin_html,
            admin_text,
            sender_email
        )

        return {
            'statusCode': 200,
            'body': json.dumps({'message': 'Emails sent successfully'})
        }

    except Exception as e:
        print(f"Error: {str(e)}")
        return {
            'statusCode': 500,
            'body': json.dumps({'error': str(e)})
        }