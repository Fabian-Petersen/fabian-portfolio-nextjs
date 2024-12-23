# const AWS = require('aws-sdk');
# const ses = new AWS.SES();

# exports.handler = async (event) => {
#     let body;
#     try {
#         body = event.body ? JSON.parse(event.body) : {};
#     } catch (e) {
#         console.error('Error parsing event body', e);
#         return {
#             statusCode: 400,
#             headers: {
#                 'Content-Type': 'application/json',
#             },
#             body: JSON.stringify('Invalid input'),
#         };
#     }

#     const params = {
#         Destination: {
#             ToAddresses: ['sboyle05@gmail.com'],
#         },
#         Message: {
#             Body: {
#                 Text: {
#                     Data: `Name: ${body.from_name}\nEmail: ${body.user_email}\nMessage: ${body.message}`,
#                     Charset: 'UTF-8',
#                 },
#             },
#             Subject: {
#                 Data: 'New Message from Your Website',
#                 Charset: 'UTF-8',
#             },
#         },
#         Source: 'sboyle05@gmail.com',
#     };

#     try {
#         await ses.sendEmail(params).promise();
#         return {
#             statusCode: 200,
#             headers: {
#                 'Access-Control-Allow-Origin': 'http://localhost:3000',
#                 'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
#                 'Access-Control-Allow-Methods': 'OPTIONS,POST',
#                 'Content-Type': 'application/json',
#             },
#             body: JSON.stringify('Email sent successfully!'),
#         };
#     } catch (error) {
#         console.error(error);
#         return {
#             statusCode: 500,
#             headers: {
#                 'Access-Control-Allow-Origin': 'http://localhost:3000',
#                 'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
#                 'Access-Control-Allow-Methods': 'OPTIONS,POST',
#                 'Content-Type': 'application/json',
#             },
#             body: JSON.stringify('Error sending email!'),
#         };
#     }
# };