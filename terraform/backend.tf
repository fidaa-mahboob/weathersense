terraform {
  backend "s3" {
    bucket         = "weatherapp-terraform-state-bucket"
    key            = "prod/terraform.tfstate"
    region         = "eu-west-2"
    dynamodb_table = "terraform-locks"
    encrypt        = true
  }
}