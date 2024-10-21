resource "aws_dynamodb_table" "projectsDB" {
  name         = "portfolio_projects"
  billing_mode = "PAY_PER_REQUEST"

  hash_key = "id"

  attribute {
    name = "id"
    type = "S"
  }

  attribute {
    name = "projectTitle"
    type = "S"
  }

  attribute {
    name = "language"
    type = "S"
  }

  attribute {
    name = "projectType"
    type = "S"
  }

  attribute {
    name = "description"
    type = "S"
  }

  attribute {
    name = "image_url"
    type = "S"
  }

  attribute {
    name = "websiteLink"
    type = "S"
  }

  attribute {
    name = "githubLink"
    type = "S"
  }

  attribute {
    name = "project_url"
    type = "S"
  }

  attribute {
    name = "singlePage"
    type = "M"
  }

  tags = {
    Name = "portfolio_projects DynamoDB Table"
  }
}

resource "aws_vpc_endpoint" "dynamodb_endpoint" {
  vpc_id          = var.vpc_id
  service_name    = "com.amazonaws.${var.region}.dynamodb"
  route_table_ids = var.route_table_ids

  tags = {
    Name = "projectDB_vpc_endpoint"
  }
}

# Create a route table for private subnets
resource "aws_route_table" "private_route_table" {
  vpc_id = var.vpc_id # VPC where your private subnets are defined

  tags = {
    Name = "Private Route Table for DynamoDB"
  }
}

# Create a route to the DynamoDB VPC Endpoint
resource "aws_route" "dynamodb_route" {
  route_table_id         = aws_route_table.private_route_table.id
  destination_cidr_block = "0.0.0.0/0" # Direct all traffic to the VPC endpoint
  vpc_endpoint_id        = aws_vpc_endpoint.dynamodb_endpoint.id
}

# Associate the private route table with private subnet az1
resource "aws_route_table_association" "private_subnet_az1_association" {
  subnet_id      = var.private_data_subnet_az1_id
  route_table_id = aws_route_table.private_route_table.id
}

# Associate the private route table with private subnet az2
resource "aws_route_table_association" "private_subnet_az2_association" {
  subnet_id      = var.private_data_subnet_az2.id
  route_table_id = aws_route_table.private_route_table.id
}