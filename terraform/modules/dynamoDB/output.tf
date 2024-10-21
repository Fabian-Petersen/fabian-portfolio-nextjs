output "dynamodb_table_name" {
  description = "The name of the created DynamoDB table."
  value       = aws_dynamodb_table.projectsDB.name
}

output "dynamodb_table_arn" {
  description = "The ARN of the created DynamoDB table."
  value       = aws_dynamodb_table.projectsDB.arn
}

output "vpc_endpoint_id" {
  description = "The ID of the VPC endpoint for DynamoDB."
  value       = aws_vpc_endpoint.dynamodb_endpoint.id
}