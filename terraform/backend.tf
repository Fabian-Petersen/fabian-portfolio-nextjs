terraform {
  backend "s3" {
    bucket = "fabian-portfolio-terraform-state"
    region = "af-south-1"
    key    = "state/terraform.tfstate"
  }
}