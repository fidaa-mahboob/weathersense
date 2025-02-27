# Create AWS WAF Web ACL
resource "aws_wafv2_web_acl" "weathersense_waf" {
  name        = "weathersense-waf"
  description = "WAF to protect WeatherSense CloudFront"
  scope       = "CLOUDFRONT"
  default_action {
    allow {}
  }
  visibility_config {
    cloudwatch_metrics_enabled = true
    metric_name                = "weathersense-waf-metrics"
    sampled_requests_enabled   = true
  }

  rule {
    name     = "AWS-CommonRuleSet"
    priority = 1
    action {
      block {}
    }
    statement {
      managed_rule_group_statement {
        vendor_name = "AWS"
        name        = "AWSManagedRulesCommonRuleSet"
      }
    }
    visibility_config {
      cloudwatch_metrics_enabled = true
      metric_name                = "common-rules"
      sampled_requests_enabled   = true
    }
  }

  rule {
    name     = "AWS-BadInputsRuleSet"
    priority = 2
    action {
      block {}
    }
    statement {
      managed_rule_group_statement {
        vendor_name = "AWS"
        name        = "AWSManagedRulesKnownBadInputsRuleSet"
      }
    }
    visibility_config {
      cloudwatch_metrics_enabled = true
      metric_name                = "bad-inputs"
      sampled_requests_enabled   = true
    }
  }

  rule {
    name     = "AWS-BotControlRuleSet"
    priority = 3
    action {
      block {}
    }
    statement {
      managed_rule_group_statement {
        vendor_name = "AWS"
        name        = "AWSManagedRulesBotControlRuleSet"
      }
    }
    visibility_config {
      cloudwatch_metrics_enabled = true
      metric_name                = "bot-control"
      sampled_requests_enabled   = true
    }
  }
}

resource "aws_wafv2_web_acl_association" "weathersense_waf_attach" {
  resource_arn = aws_cloudfront_distribution.website_cdn.arn
  web_acl_arn  = aws_wafv2_web_acl.weathersense_waf.arn
}

data "aws_caller_identity" "current" {}
