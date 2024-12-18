#!/bin/bash

lhtpDir="$PWD"
buildDir="$lhtpDir/build"
deployDir="$HOME/fidgetech/lhtp-build"

###### generate sidebars and front matter ######
npm run prep

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
