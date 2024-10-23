variable "project_name" {
  description = "The name of the project"
  type        = string
}

variable "vpc_id" {
  description = "The id of the VPC"
  type        = string
}

# variable "ingress_rules" {
#   description = "The ingress rules for the security group"
#   type        = list(number)
#   default     = [22, 80, 443]
# }