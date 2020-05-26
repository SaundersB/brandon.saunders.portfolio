#!/bin/sh


gatsby build
aws s3 sync public s3://brandonsaundersportfolio.com
