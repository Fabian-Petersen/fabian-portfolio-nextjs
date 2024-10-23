# Create Security Group for Private EC2 Instances
resource "aws_security_group" "ec2_instance_sg" {
  vpc_id = var.vpc_id

  // create the ingress rules for the security group using a dynamic block to iterate over the list of ingress rules
  dynamic "ingress" {
    for_each = var.ingress_rules
    content {
      from_port       = ingress.value
      to_port         = ingress.value
      protocol        = "tcp"
      security_groups = [aws_security_group.alb_security_group.id]
    }
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "${var.project_name}-private-instance-sg"
  }
}