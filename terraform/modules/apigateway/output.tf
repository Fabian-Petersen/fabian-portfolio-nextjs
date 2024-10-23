output "api_url" {
  value = aws_api_gateway_rest_api.contacts_api.execution_arn
}