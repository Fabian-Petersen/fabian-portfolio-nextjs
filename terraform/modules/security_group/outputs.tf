output "alb_security_group_id" {
  value = aws_security_group.alb_security_group.id
}

output "ecs_security_group_id" {
  value = aws_security_group.ecs_security_group.id
}

output "private_ec2_security_group_id" {
  value = aws_security_group.private_instance_sg.id
}