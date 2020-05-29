# Brandon Saunders Portfolio Site
This repo contains a showcase of products/projects I've worked on over the years.

https://brandonsaundersportfolio.com




# Deployment
0. Build
```shell script
gatsby build
```
1. Deploy to S3
```shell script
aws s3 sync ./public s3://brandonsaundersportfolio.com
```
