resource "aws_lambda_function" "dynamodb_inserter" {
  function_name = "projects_dynamodb_inserter"
  role          = aws_iam_role.lambda_exec.arn
  handler       = "lambda_function.lambda_handler"
  runtime       = "python3.9"

  environment {
    variables = {
      DYNAMODB_TABLE = var.dynamodb_table_name
    }
  }

  # Path to your Lambda function code
  filename      = "lambda_projects_function.zip"
  
  source_code_hash = filebase64sha256("lambda_projects_function.zip")
}

resource "aws_iam_role" "lambda_exec" {
  name = "lambda_exec_role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Action    = "sts:AssumeRole",
        Effect    = "Allow",
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
  policy      = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Action   = [
          "dynamodb:PutItem",
          "dynamodb:Scan",
          "dynamodb:Query",
          "dynamodb:GetItem",
          "dynamodb:UpdateItem",
          "dynamodb:DeleteItem"
        ],
        Effect   = "Allow",
        Resource = "*",
      },
    ],
  })
}

resource "aws_iam_role_policy_attachment" "lambda_dynamodb_policy" {
  role       = aws_iam_role.lambda_exec.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonDynamoDBFullAccess"
}

// Generate an archive file from the contents of the "lambda" directory
data "archive_file" "zip_lambda_projects" {
  type        = "zip"
  source_dir  = "${path.module}/lambdaContacts/"
  output_path = "${path.module}/lambdaContacts/lambdaContacts.zip"
}