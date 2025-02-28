resource "aws_cloudfront_origin_access_control" "cloudfront_oac" {
  name                              = "My_Cloudfront-OAC"
  description                       = "The origin access control configuration for the Cloudfront distribution"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

resource "aws_cloudfront_distribution" "website_cdn" {
  enabled = true
  web_acl_id = aws_wafv2_web_acl.weathersense_waf.id

  origin {
    domain_name              = aws_s3_bucket.web_assets_bucket.bucket_regional_domain_name
    origin_access_control_id = aws_cloudfront_origin_access_control.cloudfront_oac.id
    origin_id                = "origin-bucket-${aws_s3_bucket_website_configuration.deployment_bucket.id}"
  }

  default_root_object = "index.html"
  aliases             = ["www.${var.domain_name}"]

  default_cache_behavior {
    allowed_methods        = ["GET", "HEAD", "DELETE", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods         = ["GET", "HEAD"]
    min_ttl                = "0"
    default_ttl            = "300"
    max_ttl                = "1200"
    target_origin_id       = "origin-bucket-${aws_s3_bucket_website_configuration.deployment_bucket.id}"
    viewer_protocol_policy = "redirect-to-https"
    compress               = true

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  custom_error_response {
    error_caching_min_ttl = 300
    error_code            = 404
    response_code         = "200"
    response_page_path    = "/404.html"
  }

  viewer_certificate {
    acm_certificate_arn = aws_acm_certificate.default.arn
    ssl_support_method  = "sni-only"
  }

  tags = {
    Created_By = var.created_by
  }
}

resource "aws_s3_bucket_policy" "bucket_policy" {
  bucket = aws_s3_bucket.web_assets_bucket.id
  policy = data.aws_iam_policy_document.cloudfront_policy.json
}

data "aws_iam_policy_document" "cloudfront_policy" {
  statement {
    sid    = "AllowCloudFrontServicePrincipalReadOnly"
    effect = "Allow"
    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.web_assets_bucket.arn}/*"]
    condition {
      test     = "StringEquals"
      values   = ["${aws_cloudfront_distribution.website_cdn.arn}"]
      variable = "AWS:SourceArn"
    }
  }
}