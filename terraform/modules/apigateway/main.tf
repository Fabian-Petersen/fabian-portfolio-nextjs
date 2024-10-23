resource "aws_api_gateway_rest_api" "contacts_api" {
  name        = "ContactsAPI"
  description = "API Gateway for Lambda to insert data into DynamoDB"
}

resource "aws_api_gateway_resource" "contacts" {
  rest_api_id = aws_api_gateway_rest_api.contacts_api.id
  parent_id   = aws_api_gateway_rest_api.contacts_api.root_resource_id
  path_part   = "contacts"
}

resource "aws_api_gateway_method" "post_method" {
  rest_api_id   = aws_api_gateway_rest_api.contacts_api.id
  resource_id   = aws_api_gateway_resource.contacts.id
  http_method   = "POST"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "lambda_integration" {
  rest_api_id = aws_api_gateway_rest_api.contacts_api.id
  resource_id = aws_api_gateway_resource.contacts.id
  http_method = aws_api_gateway_method.post_method.http_method
  type        = "AWS_PROXY"
  integration_http_method = "POST"
  uri         = var.lambda_function_uri
}

resource "aws_lambda_permission" "api_gateway_permission" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name =  var.lambda_function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_api_gateway_rest_api.contacts_api.execution_arn}/*/*"
}