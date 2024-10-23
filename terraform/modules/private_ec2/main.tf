# $ create private EC2 instances
resource "aws_instance" "private_ec2_instance_az1" {
  ami             = var.ami_id
  instance_type   = var.instance_type
  subnet_id       = var.private_app_subnet_az1_id
  vpc_security_group_ids = [aws_security_group.ec2_instance_sg.id]

  # key name. Spewcify the key name and it should match the key name from the resource "tf_key_pair"
  key_name = var.tf_key_pair

  tags = {
    Name = "${var.project_name}-private-ec2-1"
  }

  depends_on = [var.tf_key_pair]
}

# # ALB Attachments for EC2 Instances
# resource "aws_lb_target_group_attachment" "tg_attachment_1" {
#   target_group_arn = aws_lb_target_group.alb_target_group.arn
#   target_id        = aws_instance.private_ec2_1.private_ip
#   port             = 80
# }

# resource "aws_lb_target_group_attachment" "tg_attachment_2" {
#   target_group_arn = aws_lb_target_group.alb_target_group.arn
#   target_id        = aws_instance.private_ec2_2.private_ip
#   port             = 80
# }