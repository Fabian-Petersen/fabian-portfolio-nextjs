# $ General variables
variable "project_name" {
  description = "The name of the project"
  type        = string
}
variable "region" {
  description = "aws region for the project"
  type        = string
}

# $ Route 53 variables
variable "domain_name" {
  description = "The domain name for the ACM"
  type        = string
}

variable "site_domain_name" {
  default     = "fabian-portfolio.net"
  description = "The domain name for the site"
  type        = string
}

variable "record_name" {
  description = "sub domain name"
  type        = string
}

# $ ALB variables
variable "alb_cidr_block" {
  default     = ""
  description = "The CIDR block of the ALB"
  type        = string
}

# $ VPC variables
variable "vpc_id" {
  default     = ""
  description = "The id of the VPC"
  type        = string
}

variable "vpc_cidr" {
  description = "value for vpc cidr"
  type        = string
}

variable "public_subnet_az1_cidr" {
  description = "value for public subnet in AZ1"
  type        = string
}

variable "public_subnet_az2_cidr" {
  description = "value for public subnet in AZ2"
  type        = string
}

variable "private_app_subnet_az1_cidr" {
  description = "value for private app subnet in AZ1"
  type        = string
}

variable "private_app_subnet_az2_cidr" {
  description = "value for private app subnet in AZ2"
  type        = string
}

variable "private_data_subnet_az1_cidr" {
  description = "value for private data subnet in AZ1"
  type        = string
}

variable "private_data_subnet_az2_cidr" {
  description = "value for private data subnet in AZ2"
  type        = string
}

# $ EC2 instance variables
variable "ami_id" {
  description = "The AMI ID for EC2 instances"
  type        = string
}

variable "instance_type" {
  description = "EC2 instance type"
  type        = string
}

# aws ec2 key pair for EC2 instances
# variable "tf_key_pair" {
#   description = "The key pair for the EC2 instances"
#   type        = string
# }