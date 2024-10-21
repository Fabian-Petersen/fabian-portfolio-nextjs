# Private EC2 instances
resource "aws_instance" "private_ec2_1" {
  ami           = var.ami_id
  instance_type = var.instance_type
  subnet_id     = module.vpc.private_app_subnet_az1.id
  security_groups = [aws_security_group.private_ec2_security_group_id]
  tags = {
    Name = "${var.project_name}-private-ec2-1"
  }
}

resource "aws_instance" "private_ec2_2" {
  ami           = var.ami_id
  instance_type = var.instance_type
  subnet_id     = module.vpc.private_app_subnet_az2.id
  security_groups = [aws_security_group.private_ec2_security_group_id]

  tags = {
    Name = "${var.project_name}-private-ec2-2"
  }
}

# ALB Attachments for EC2 Instances
resource "aws_lb_target_group_attachment" "tg_attachment_1" {
  target_group_arn = aws_lb_target_group.alb_target_group.arn
  target_id        = aws_instance.private_ec2_1.private_ip
  port             = 80
}

resource "aws_lb_target_group_attachment" "tg_attachment_2" {
  target_group_arn = aws_lb_target_group.alb_target_group.arn
  target_id        = aws_instance.private_ec2_2.private_ip
  port             = 80
}