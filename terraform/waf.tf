resource "aws_wafv2_web_acl" "weathersense_waf" {
  provider    = aws.acm-provider
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

  # Example rule: Block common attacks
  rule {
    name     = "AWS-CommonRuleSet"
    priority = 1

    override_action {
      count {}
    }

    statement {
      managed_rule_group_statement {
        name        = "AWSManagedRulesCommonRuleSet"
        vendor_name = "AWS"

        rule_action_override {
          action_to_use {
            count {}
          }
          name = "SizeRestrictions_QUERYSTRING"
        }

        rule_action_override {
          action_to_use {
            count {}
          }
          name = "NoUserAgent_HEADER"
        }
      }
    }

    visibility_config {
      cloudwatch_metrics_enabled = true
      metric_name                = "common-rules"
      sampled_requests_enabled   = true
    }
  }

  rule {
    name     = "AWS-BotControlRuleSet"
    priority = 3

    override_action {
      count {}
    }

    statement {
      managed_rule_group_statement {
        vendor_name = "AWS"
        name        = "AWSManagedRulesBotControlRuleSet"

        rule_action_override {
          action_to_use {
            block {}
          }
          name = "CategoryKnownBotContent"
        }
      }
    }

    visibility_config {
      cloudwatch_metrics_enabled = true
      metric_name                = "bot-control"
      sampled_requests_enabled   = true
    }
  }

  rule {
    name     = "AWS-BadInputsRuleSet"
    priority = 2

    override_action {
      count {}
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
}