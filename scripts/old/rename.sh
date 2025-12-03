find docs -type f -name "*.md" | while read file; do
  dir=$(dirname "$file")
  name=$(basename "$file")
  if [[ $name =~ ^([0-9]+)-([0-9]+)-([0-9]+)-([0-9])-(.+\.md)$ ]]; then
    newname="${BASH_REMATCH[1]}-${BASH_REMATCH[2]}-${BASH_REMATCH[3]}-0${BASH_REMATCH[4]}-${BASH_REMATCH[5]}"
    mv "$file" "$dir/$newname"
    echo "Renamed: $name -> $newname"
  fi
done
