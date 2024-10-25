// Create HTTP API 
resource "aws_apigatewayv2_api" "fabian_portfolio_api" {
  name          = "fabian-portfolio-api"
  description = "API Gateway for Fabian's Portfolio, send contacts to dynamodb and perform CRUD operations on projects"
  protocol_type = "HTTP"
   
    cors_configuration {
    allow_origins = ["http://localhost:3000"]  # Replace "*" with your domain "fabian_portfolio.net" to restrict CORS
    allow_methods = ["GET", "POST", "OPTIONS"]
    allow_headers = ["Content-Type", "Authorization"]
    expose_headers = ["Content-Type", "Authorization"]
    
  }
}

// Create the stage for the API Gateway
resource "aws_apigatewayv2_stage" "dev" {
  api_id = aws_apigatewayv2_api.fabian_portfolio_api.id
  name   = "dev"
}

// Create an integration between the API Gateway and the Lambda function
resource "aws_apigatewayv2_integration" "lambda_integration" {
  api_id           = aws_apigatewayv2_api.fabian_portfolio_api.id
  integration_type = "AWS_PROXY"

  connection_type           = "INTERNET"
  description               = "lambda integration for the contact form post to the database via the API Gateway"
  integration_method        = "POST"
  integration_uri           = var.lambda_function_uri
  passthrough_behavior      = "WHEN_NO_MATCH"
}

resource "aws_lambda_permission" "api_gateway_permission" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = var.lambda_function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.fabian_portfolio_api.execution_arn}/*/*"
}

// Map to domain name
# resource "aws_apigatewayv2_api_mapping" "api_mapping" {
#   api_id      = aws_apigatewayv2_api.fabian_portfolio_api.id
#   domain_name = var.domain_name
#   stage       = aws_apigatewayv2_stage.dev.id
# }


// Create a route for the API Gateway
resource "aws_apigatewayv2_route" "api_route" {
  api_id    = aws_apigatewayv2_api.fabian_portfolio_api.id
  route_key = "POST /contacts"

 //optional  
  target = "integrations/${aws_apigatewayv2_integration.lambda_integration.id}"
  depends_on = [aws_apigatewayv2_integration.lambda_integration]
}

// Deploy the API Gateway after creating the resources
resource "aws_apigatewayv2_deployment" "api_deployment" {
  depends_on  = [aws_apigatewayv2_integration.lambda_integration]
  api_id      = aws_apigatewayv2_api.fabian_portfolio_api.id
  description = "api deployment"


  triggers = {
    redeployment = sha1(join(",", tolist([
      jsonencode(aws_apigatewayv2_integration.lambda_integration),
      jsonencode(aws_apigatewayv2_route.api_route),
    ])))
  }

  lifecycle {
    create_before_destroy = true
  }
}