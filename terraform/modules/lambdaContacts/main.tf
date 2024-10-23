// Create IAM Role for Lambda Function
resource "aws_iam_role" "contacts_lambda_dynamoDB_role" {
  name = "contacts_lambda_dynamoDB_role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Action = "sts:AssumeRole",
        Effect = "Allow",
        Principal = {
          Service = "lambda.amazonaws.com"
        }
      }
    ]
  })
}

// IAM Policy to Lambda Role
resource "aws_iam_policy" "contacts_lambda_dynamodb_policy" {
  name        = "contacts_lambda_dynamodb_policy"
  description = "IAM Policy for Lambda to access DynamoDB"
  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Action = [
          "dynamodb:PutItem",
          "dynamodb:Scan",
          "dynamodb:Query",
          "dynamodb:GetItem",
          "dynamodb:UpdateItem",
          "dynamodb:DeleteItem"
        ],
        Effect   = "Allow",
        Resource = var.dynamodb_table_arn,
      },
    ],
  })
}

// Attach IAM Policy to Lambda Role
resource "aws_iam_role_policy_attachment" "lambda_dynamodb_policy" {
  role       = aws_iam_role.contacts_lambda_dynamoDB_role.name
  policy_arn = aws_iam_policy.contacts_lambda_dynamodb_policy.arn
}


# Generate archive from file or directory to upload to aws to execute lambda function
data "archive_file" "python_contacts" {
  type        = "zip"
  source_dir  = "${path.module}/pythonContacts"
  output_path = "${path.module}/pythonContacts/python_contacts_file.zip"
}

# Create Lambda Function
# In Terrafrom ${path.module} is the current directory
resource "aws_lambda_function" "contacts_dynamodb_inserter" {
  filename      = "${path.module}/pythonContacts/python_contacts_file.zip"   
  function_name = "contacts_dynamodb_inserter"
  role          = aws_iam_role.contacts_lambda_dynamoDB_role.arn
  handler       = "python_contacts_file.lambda_handler"
  runtime       = "python3.9"
  depends_on    = [aws_iam_role_policy_attachment.lambda_dynamodb_policy]
  }
