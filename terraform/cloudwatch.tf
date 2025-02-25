resource "aws_cloudwatch_metric_alarm" "cloudfront_5xx_alarm" {
    alarm_name = "Cloudwatch-5xx-Errors"
    comparison_operator = "GreaterThanThreshold" 
    evaluation_periods = 1
    metric_name = "5xxErrorRate"
    namespace = "AWS/Cloudfront"

    dimensions = {
        DistributionId = aws_cloudfront_distribution.website_cdn.id
        Region = "Global"
    }

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