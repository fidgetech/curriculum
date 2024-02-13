#!/bin/bash

lhtpDir="/Users/epicodus/fidgetech/lhtp"
deployDir="/Users/epicodus/fidgetech/lhtp-build"
track="fidgetech"
trackDir="$lhtpDir/tracks/$track"
buildDir="$trackDir/build"

cd "$lhtpDir" || exit

###### fetch track ######
npm run fetch

###### build site for track ######
cd "$trackDir" || exit
echo ""
echo "**************************************"
echo "******* BUILDING $track *******"
echo "**************************************"
echo ""
npm run build

###### deploy site for track ######
if [ -d "$buildDir" ] && [ -d "$deployDir" ]; then
  cd "$deployDir" || exit
  git pull origin gh-pages
  rm -rf *
  cp -r "$buildDir/"* .
  git add . && git commit -m "update gh-pages" && git push origin gh-pages
else
  echo "Either $buildDir or $deployDir does not exist. Skipping."
fi
