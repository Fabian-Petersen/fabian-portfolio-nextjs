# output "alb_dns_name" {
#   description = "DNS name of the Application Load Balancer"
#   value       = aws_lb.application_load_balancer.dns_name
# }

output "private_ec2_1_private_ip" {
  description = "Private IP of EC2 instance 1"
  value       = aws_instance.private_ec2_1.private_ip
}

output "ec2_security_group_id" {
  value = aws_security_group.private_instance_sg.id
}

# output "private_ec2_2_private_ip" {
#   description = "Private IP of EC2 instance 2"
#   value       = aws_instance.private_ec2_2.private_ip
# }

output "ami_id" {
  description = "The AMI ID for EC2 instances"
  value       = var.ami_id
}