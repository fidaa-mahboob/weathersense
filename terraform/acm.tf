resource "aws_acm_certificate" "default" {
  provider          = aws.acm-provider
  domain_name       = var.domain_name
  subject_alternative_names = [ "*.${var.domain_name}" ]
  validation_method = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_acm_certificate_validation" "validation" {
  provider                = aws.acm-provider
  certificate_arn         = aws_acm_certificate.default.arn
  validation_record_fqdns = [aws_route53_record.default.fqdn, aws_route53_record.www.fqdn]
}
