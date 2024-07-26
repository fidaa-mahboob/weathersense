#!/bin/bash

bucketUrl=s3://weatherapp-assets-bucket
cloudFrontDistributions=$(aws cloudfront list-distributions)
distributionsList=$(echo $cloudFrontDistributions | jq -r '.DistributionList')
id=$(echo $distributionsList | jq -r '.Items[0].Id')

aws s3 rm  $bucketUrl --recursive  

aws configure set preview.cloudfront true && aws cloudfront create-invalidation --distribution-id $id --paths "/*"

npm run build

aws s3 sync ./build $bucketUrl
