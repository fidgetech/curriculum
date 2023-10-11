#!/bin/bash

parentDir="/Users/epicodus/lhtp"
lhtpDir="$parentDir/lhtp"
tracks=("full-time" "part-time" "full-time-pre-october" "part-time-evening")

cd "$lhtpDir" || exit
npm run fetch

# build and deploy root site
cd "$lhtpDir" || exit
npm run build
cd "$parentDir/lhtp-root" || exit
rm -rf *
cp -r "$lhtpDir/build/"* .
echo "www.learnhowtoprogram.com" > CNAME
git add . && git commit -m "update gh-pages" && git push origin gh-pages

# build sites for each track
for track in "${tracks[@]}"; do
  trackDir="$lhtpDir/tracks/$track"
  cd "$trackDir" || exit
  echo ""
  echo "Building $track..."
  npm run build
  echo ""
done

# deploy sites for each track
for track in "${tracks[@]}"; do
  trackDir="$lhtpDir/tracks/$track"
  src_dir="$trackDir/build"
  dest_dir="$parentDir/lhtp-$track"
  if [ -d "$src_dir" ] && [ -d "$dest_dir" ]; then
    cd "$dest_dir" || exit
    rm -rf *
    cp -r "$src_dir/"* .
    echo "$track.learnhowtoprogram.com" > CNAME
    git add . && git commit -m "update gh-pages" && git push origin gh-pages
  else
    echo "Either $src_dir or $dest_dir does not exist. Skipping."
  fi
done