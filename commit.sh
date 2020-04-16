#!/bin/bash

echo
echo "Commit on Github"

if git diff-index --quiet HEAD --; then
    # No changes
    echo "No changes to commit on Github"
else
    # Changes
    currentTime=$(date +"%T")
    git add . && git commit -m "new_mods_$currentTime" && git push origin master;
fi