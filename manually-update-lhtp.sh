#!/bin/bash

lhtpDir="$HOME/fidgetech/lhtp"
deployDir="$HOME/fidgetech/lhtp-build"
buildDir="$lhtpDir/build"

cd "$lhtpDir" || exit

###### build site ######
npm run build

###### deploy site ######
if [ -d "$buildDir" ] && [ -d "$deployDir" ]; then
  cd "$deployDir" || exit
  git pull origin gh-pages
  rm -rf *
  cp -r "$buildDir/"* .
  git add . && git commit -m "update gh-pages" && git push origin gh-pages
else
  echo "Either $buildDir or $deployDir does not exist. Skipping."
fi
