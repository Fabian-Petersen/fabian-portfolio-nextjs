output "lambda_function_arn" {
  value = aws_lambda_function.contacts_dynamodb_inserter.arn
}

output "lambda_function_name" {
  value = aws_lambda_function.contacts_dynamodb_inserter.function_name
}

output "lambda_function_uri" {
  value = aws_lambda_function.contacts_dynamodb_inserter.invoke_arn
}

# output "aws_lambda_function_contacts_dynamodb_inserter" {
#   value = aws_lambda_function.dynamodb_inserter.invoke_arn
# }
