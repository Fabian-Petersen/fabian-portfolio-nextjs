variable "vpc_id" {
  description = "The ID of the VPC where the DynamoDB table will be accessed."
  type        = string
}

variable "route_table_ids" {
  description = "The list of route table IDs for the private subnets."
  type        = list(string)
}

variable "region" {
  description = "The AWS region where the resources will be created."
  type        = string
}

variable "private_data_subnet_az1_id" {
  description = "The ID of the private subnet in Availability Zone 1."
  type        = string
}

variable "private_data_subnet_az2_id" {
  description = "The ID of the private subnet in Availability Zone 2."
  type        = string
}

variable "projects_dynamodb_table_name" {
  description = "The name of the DynamoDB table to insert data into."
  type        = string
  
}