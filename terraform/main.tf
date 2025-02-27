provider "aws" {
  region = var.aws_region
}

provider "aws" {
  alias  = "acm-provider"
  region = "us-east-1"
}