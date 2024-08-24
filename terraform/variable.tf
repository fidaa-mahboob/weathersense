variable "aws_profile" {
  default     = "default"
  description = "AWS profile name"
  type        = string
}

variable "aws_region" {
  default     = "eu-west-2"
  description = "AWS region"
  type        = string
}

variable "bucket_name" {
  default = "weatherapp-assets-bucket"
  type    = string
}

variable "domain_name" {
  type    = string
  default = "weathersense.co.uk"
}

variable "created_by" {
  default = "Fidaa Mahboob"
  type    = string
}

variable "object_ownership" {
  default = "BucketOwnerPreferred"
  type    = string
}