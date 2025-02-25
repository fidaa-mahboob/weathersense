resource "aws_cloudwatch_metric_alarm" "cloudfront_5xx_alarm" {
    alarm_name = "Cloudwatch-5xx-Errors"
    comparison_operator = "GreaterThanThreshold" 
    evaluation_periods = 1
    metric_name = "5xxErrorRate"
    namespace = "AWS/Cloudfront"
    threshold = 5

    dimensions = {
        DistributionId = aws_cloudfront_distribution.website_cdn.id
        Region = "Global"
    }

    alarm_description = "Triggers when CloudFront 5XX errors exceed 5%."
    actions_enabled = true
    alarm_actions = [aws_sns_topic.weathersense_cloudfront_alert]
}

resource "aws_sns_topic" "weathersense_cloudfront_alert" {
    name = "weathersense-cloudfront-alert-topic"
}

resource "aws_sns_topic_subscription" "email_subscriber" {
    topic_arn = aws_sns_topic.weathersense_cloudfront_alert.arn
    protocol = "email"
    endpoint = "fidaamahboob@gmail.com"
}

resource "aws_cloudwatch_metric_alarm" "cloudfront_4xx_alarm" {
    alarm_name = "Cloudwatch-4xx-Errors"
    comparison_operator = "GreaterThanThreshold" 
    evaluation_periods = 1
    metric_name = "4xxErrorRate"
    namespace = "AWS/Cloudfront"
    threshold = 10

    dimensions = {
        DistributionId = aws_cloudfront_distribution.website_cdn.id
        Region = "Global"
    }

    alarm_description = "Triggers when CloudFront 4XX errors exceed 10%."
    actions_enabled = true
    alarm_actions = [aws_sns_topic.weathersense_cloudfront_alert]
}