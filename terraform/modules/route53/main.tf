# get hosted zone details
# terraform aws data hosted zone
# data "aws_route53_zone" "hosted_zone" {
#   name = var.site_domain_name
# }

# create a record set in route 53

# terraform aws route 53 record
# resource "aws_route53_record" "fabian_portfolio_net" {
#   zone_id = data.aws_route53_zone.hosted_zone.zone_id
#   name    = var.record_name
#   type    = "A"

#   alias {
#     name                   = module.application_load_balancer.dns_name
#     zone_id                = module.application_load_balancer.zone_id
#     evaluate_target_health = true
#   }
# }
