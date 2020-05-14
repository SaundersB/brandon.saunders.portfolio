#!/usr/bin/env bash
npm version patch
HASH=$(git rev-list --max-count=1 HEAD)
PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g')
NEW_VERSION_NAME="${PACKAGE_VERSION}-${HASH}"
echo "Updating to version ${NEW_VERSION_NAME}"
git add .
git push origin master
git tag ${NEW_VERSION_NAME}
git push origin ${NEW_VERSION_NAME}
npm run predeploy
npm run deploy
