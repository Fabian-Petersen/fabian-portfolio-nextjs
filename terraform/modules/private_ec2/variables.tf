variable "project_name" {
  description = "The name of the project"
  type        = string
}

variable "vpc_id" {

}

variable "ingress_rules" {
  description = "The ingress rules for the security group"
  type        = list(number)
  default     = [22, 80, 443]
}

# variable "private_app_subnet_az1_cidr" {
#   description = "CIDR block for private app subnet in AZ1"
#   type        = string
# }

variable "ami_id" {
  description = "The AMI ID to use for EC2 instances"
  type        = string
}

variable "instance_type" {
  description = "The EC2 instance type"
  type        = string
}

variable "alb_security_group_id" {
  description = "The security group ID for the ALB"
  type        = string
}

variable "certificate_arn" {
  description = "The ARN of the SSL certificate for the ALB"
  type        = string
}

variable "tf_key_pair" {
  description = "The name of the key pair to use for EC2 instances"
  type        = string
}

variable "ec2_security_groups" {
  description = "The security groups to attach to the EC2 instances"
  type        = list(string)
}

variable "private_app_subnet_az1_id" {
  description = "The ID of the private app subnet in AZ1"
  type        = string
}

variable "ec2_security_group_id" {
  description = "The ID of the security group for the EC2 instances"
  type        = string
}

