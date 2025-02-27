data "aws_route53_zone" "zone" {
  name         = var.domain_name
  private_zone = false
}

resource "aws_route53_record" "www" {
  allow_overwrite = true
  zone_id         = data.aws_route53_zone.zone.zone_id
  name            = "www"
  type            = "A"
  alias {
    name                   = aws_cloudfront_distribution.website_cdn.domain_name
    zone_id                = aws_cloudfront_distribution.website_cdn.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "default" {
  allow_overwrite = true
  zone_id         = data.aws_route53_zone.zone.zone_id
  name            = tolist(aws_acm_certificate.default.domain_validation_options)[0].resource_record_name
  records         = [tolist(aws_acm_certificate.default.domain_validation_options)[0].resource_record_value]
  type            = tolist(aws_acm_certificate.default.domain_validation_options)[0].resource_record_type
  ttl             = 300
}