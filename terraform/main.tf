# configure aws provider
provider "aws" {
  region  = var.region
  profile = "fabian-user"
}

# create vpc
# module "vpc" {
#   source                       = "./modules/vpc"
#   region                       = var.region
#   project_name                 = var.project_name
#   vpc_cidr                     = var.vpc_cidr
#   public_subnet_az1_cidr       = var.public_subnet_az1_cidr
#   public_subnet_az2_cidr       = var.public_subnet_az2_cidr
#   private_app_subnet_az1_cidr  = var.private_app_subnet_az1_cidr
#   private_app_subnet_az2_cidr  = var.private_app_subnet_az2_cidr
#   private_data_subnet_az1_cidr = var.private_data_subnet_az1_cidr
#   private_data_subnet_az2_cidr = var.private_data_subnet_az2_cidr

# }

# Create security group
# module "security_group" {
#   source       = "./modules/security_group"
#   vpc_id       = module.vpc.vpc_id
#   project_name = var.project_name
# }

# create aws certificate manager "acm"
# module "acm" {
#   source      = "./modules/acm"
#   domain_name = var.domain_name
# }

module "lambdaContacts" {
  source = "./modules/lambdaContacts"
  dynamodb_table_arn = module.dynamoDBContactForm.dynamodb_table_arn
}

module "apigateway" {
  source = "./modules/apigateway"
  lambda_function_name = module.lambdaContacts.lambda_function_name
  lambda_function_uri = module.lambdaContacts.lambda_function_uri
}

module "dynamoDBContactForm" {
  source = "./modules/dynamoDBContactForm"
}

# create application load balancer
# module "application_load_balancer" {
#   source                = "./modules/alb"
#   project_name          = module.vpc.project_name
#   alb_security_group_id = module.security_group.alb_security_group_id
#   public_subnet_az1_id  = module.vpc.public_subnet_az1_id
#   public_subnet_az2_id  = module.vpc.public_subnet_az2_id
#   vpc_id                = module.vpc.vpc_id
#   certificate_arn       = module.acm.certificate_arn
# }

# Create dynamoDB table
# module "dynamoDB" {
#   source = "./modules/dynamoDB"
#   vpc_id = module.vpc.vpc_id
#   route_table_ids = [
#     module.vpc.private_data_subnet_az1_id, module.vpc.private_data_subnet_az2_id
#   ]
#   projects = var.project_name
#   region   = var.region
# }

# create ec2 key pair to ssh into the ec2 instances
# module "ec2_key_pair" {
#   source = "./modules/ec2_ke y_pair"
# }

#create private ec2 instances
# module "private_ec2" {}