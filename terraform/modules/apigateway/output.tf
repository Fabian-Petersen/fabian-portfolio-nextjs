output "api_url" {
  value = aws_apigatewayv2_api.fabian_portfolio_api.execution_arn
}

output "api_gateway_url" {
  value = aws_apigatewayv2_api.fabian_portfolio_api.api_endpoint
}