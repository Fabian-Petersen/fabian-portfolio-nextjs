# $ create vpc
resource "aws_vpc" "development-vpc" {
  cidr_block           = var.vpc_cidr
  instance_tenancy     = "default"
  enable_dns_hostnames = true

  tags = {
    Name = "${var.project_name}-development-vpc"
  }
}

# $ create internet gateway and attach it to vpc
resource "aws_internet_gateway" "internet_gateway" {
  vpc_id = aws_vpc.development-vpc.id

  tags = {
    Name = "${var.project_name}-igw"
  }
}

# $ get all the avalablility zones in region
data "aws_availability_zones" "available_zones" {}

# $ create public subnet az1
resource "aws_subnet" "public_subnet_az1" {
  vpc_id                  = aws_vpc.development-vpc.id
  cidr_block              = var.public_subnet_az1_cidr
  availability_zone       = data.aws_availability_zones.available_zones.names[0]
  map_public_ip_on_launch = true

  tags = {
    Name = "public subnet az1"
  }
}

# $create public subnet az2
resource "aws_subnet" "public_subnet_az2" {
  vpc_id                  = aws_vpc.development-vpc.id
  cidr_block              = var.public_subnet_az2_cidr
  availability_zone       = data.aws_availability_zones.available_zones.names[1]
  map_public_ip_on_launch = true

  tags = {
    Name = "public subnet az2"
  }
}

# $ create public route table
resource "aws_route_table" "public_route_table" {
  vpc_id = aws_vpc.development-vpc.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.internet_gateway.id
  }

  tags = {
    Name = "public route table"
  }
}

# $ create private route table
resource "aws_route_table" "private_route_table" {
  vpc_id = aws_vpc.development-vpc.id

  tags = {
    Name = "private route table"
  }
}

// ======================== Public Subnet Route Table Association ======================== //

# $ associate public subnet az1 to "public route table"
resource "aws_route_table_association" "public_subnet_az1_route_table_association" {
  subnet_id      = aws_subnet.public_subnet_az1.id
  route_table_id = aws_route_table.public_route_table.id
}

# $ associate public subnet az2 to "public route table"
resource "aws_route_table_association" "public_subnet_az2_route_table_association" {
  subnet_id      = aws_subnet.public_subnet_az2.id
  route_table_id = aws_route_table.public_route_table.id
}

// ======================== Private App Subnet Route Table Association ======================== //

# $ associate private app subnet az1 to "private route table"
resource "aws_route_table_association" "private_app_subnet_az1_route_table_association" {
  subnet_id      = aws_subnet.private_app_subnet_az1.id
  route_table_id = aws_route_table.private_route_table.id
}

# $ associate private app subnet az2 to "private route table"
resource "aws_route_table_association" "private_app_subnet_az2_route_table_association" {
  subnet_id      = aws_subnet.private_app_subnet_az2.id
  route_table_id = aws_route_table.private_route_table.id
}

// ======================== Private Data Subnet Route Table Association ======================== //

# $ associate private subnet az1 to "private route table"
resource "aws_route_table_association" "private_data_subnet_az1_route_table_association" {
  subnet_id      = aws_subnet.private_data_subnet_az1.id
  route_table_id = aws_route_table.private_route_table.id
}

# $ associate private subnet az2 to "private route table"
resource "aws_route_table_association" "private_data_subnet_az2_route_table_association" {
  subnet_id      = aws_subnet.private_data_subnet_az2.id
  route_table_id = aws_route_table.private_route_table.id
}



# $ create elastic ip for nat gateway az1
resource "aws_eip" "elastic-ip-for-nat-gw-az1" {
  associate_with_private_ip = "10.0.0.2.1"
  tags = {
    Name = "elastic-ip-for-nat-gw-az1"
  }
}

# $ create elastic ip for nat gateway az2
resource "aws_eip" "elastic-ip-for-nat-gw-az2" {
  associate_with_private_ip = "10.0.0.3.1"
  tags = {
    Name = "elastic-ip-for-nat-gw-az2"
  }
}

# $ create nat gateway public subnet az1 
resource "aws_nat_gateway" "nat-gateway-az1" {
  allocation_id = aws_eip.elastic-ip-for-nat-gw-az1.id
  subnet_id     = aws_subnet.public_subnet_az1.id

  tags = {
    Name = "nat-gateway-az1"
  }
  # depends on the creation of the elastic ip before nat gateway is created
  depends_on = [aws_eip.elastic-ip-for-nat-gw-az1]
}

# $ create nat gateway public subnet az2 
resource "aws_nat_gateway" "nat-gateway-az2" {
  allocation_id = aws_eip.elastic-ip-for-nat-gw-az2.id
  subnet_id     = aws_subnet.public_subnet_az2.id

  tags = {
    Name = "nat-gateway-az2"
  }
  # depends on the creation of the elastic ip before nat gateway is created
  depends_on = [aws_eip.elastic-ip-for-nat-gw-az2]
}

# $ create route for private subnet to route traffic to internet via nat gateway az1
resource "aws_route" "private_subnet_route_to_nat_gateway_az1" {
  route_table_id         = aws_route_table.private_route_table.id
  destination_cidr_block = "0.0.0.0/0"
  nat_gateway_id         = aws_nat_gateway.nat-gateway-az1.id
}

# $ create route for private subnet to route traffic to internet via nat gateway az2
resource "aws_route" "private_subnet_route_to_nat_gateway_az2" {
  route_table_id         = aws_route_table.private_route_table.id
  destination_cidr_block = "0.0.0.0/0"
  nat_gateway_id         = aws_nat_gateway.nat-gateway-az2.id
}

# $ create route for public route table to internet via internet gateway
resource "aws_route" "public_internet-gateway_route_az1" {
  route_table_id         = aws_route_table.public_route_table.id
  destination_cidr_block = "0.0.0.0/0"
  gateway_id         = aws_internet_gateway.internet_gateway.id
}

# $ create private app subnet az1
resource "aws_subnet" "private_app_subnet_az1" {
  vpc_id                  = aws_vpc.development-vpc.id
  cidr_block              = var.private_app_subnet_az1_cidr
  availability_zone       = data.aws_availability_zones.available_zones.names[0]
  map_public_ip_on_launch = false

  tags = {
    Name = "private app subnet az1"
  }
}

# $ create private app subnet az2
resource "aws_subnet" "private_app_subnet_az2" {
  vpc_id                  = aws_vpc.development-vpc.id
  cidr_block              = var.private_app_subnet_az2_cidr
  availability_zone       = data.aws_availability_zones.available_zones.names[1]
  map_public_ip_on_launch = false

  tags = {
    Name = "private app subnet az2"
  }
}

# $ create private data subnet az1
resource "aws_subnet" "private_data_subnet_az1" {
  vpc_id                  = aws_vpc.development-vpc.id
  cidr_block              = var.private_data_subnet_az1_cidr
  availability_zone       = data.aws_availability_zones.available_zones.names[0]
  map_public_ip_on_launch = false

  tags = {
    Name = "private data subnet az1"
  }
}

# $ create private data subnet az2
resource "aws_subnet" "private_data_subnet_az2" {
  vpc_id                  = aws_vpc.development-vpc.id
  cidr_block              = var.private_data_subnet_az2_cidr
  availability_zone       = data.aws_availability_zones.available_zones.names[1]
  map_public_ip_on_launch = false

  tags = {
    Name = "private data subnet az2"
  }
}



