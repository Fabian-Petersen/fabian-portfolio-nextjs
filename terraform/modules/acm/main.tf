resource "aws_acm_certificate" "acm_certificate" {
  domain_name       = var.domain_name
  validation_method = "DNS"

lifecycle {
    create_before_destroy = true
    }
    
    tags = {
        Name = "fabian_portfolio_acm_certificate"
    }
}