provider "aws" {
  region  = var.aws_region
}

resource "aws_s3_bucket" "web_assets_bucket" {
  bucket = var.bucket_name

  tags = {
    Name       = var.bucket_name
    Created_By = var.created_by
  }
}


resource "aws_s3_bucket_website_configuration" "deployment_bucket" {
  bucket = aws_s3_bucket.web_assets_bucket.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "error.html"
  }
}

resource "aws_s3_bucket_ownership_controls" "ownership_controls" {
  bucket = aws_s3_bucket_website_configuration.deployment_bucket.id
  rule {
    object_ownership = var.object_ownership
  }
}


resource "aws_s3_bucket_acl" "s3_bucket_acl" {
  depends_on = [aws_s3_bucket_ownership_controls.ownership_controls]
  bucket     = aws_s3_bucket_website_configuration.deployment_bucket.id
  acl        = "private"
}