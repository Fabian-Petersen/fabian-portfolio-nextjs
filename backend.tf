# $ store the terraform state in an s3 bucket
terraform {
  backend "s3" {
    bucket  = "fabian-portfolio-terraform-state"
    key     = "fabian_portfolio.tfstate"
    region  = "af-south-1"
    profile = "fabian-user"
  }
}
