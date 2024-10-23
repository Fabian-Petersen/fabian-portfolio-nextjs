# $ General variables
project_name = "fabian_portfolio"
region       = "af-south-1"

# $ Route 53 variables 
domain_name      = "fabian-portfolio.net"
site_domain_name = "fabian-portfolio.net"
record_name      = "www"

# $ ALB variables
alb_cidr_block = "0.0.0.0.0/0"

# $ VPC variables
vpc_cidr                     = "10.0.0.0/16"
public_subnet_az1_cidr       = "10.0.0.0/24"
public_subnet_az2_cidr       = "10.0.1.0/24"
private_app_subnet_az1_cidr  = "10.0.2.0/24"
private_app_subnet_az2_cidr  = "10.0.3.0/24"
private_data_subnet_az1_cidr = "10.0.4.0/24"
private_data_subnet_az2_cidr = "10.0.5.0/24"

# $ EC2 instance variables
ami_id        = "ami-097b6ec2b0dc2e960"
instance_type = "t3.nano"