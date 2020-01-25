#!/bin/sh

# one user input, this does support creating sub componets if you pass a file path instead of folderName
folderName=$1
# the path to where components live
path=./src/App/$folderName
# let the user know we are doing things
echo "creating your component dir and index file {name: $folderName, path: $path}"
# make the dir
mkdir $path
# make the index file
cat <<EOF > $path/index.js
import React from 'react';

const main = () => {
  return (
    <div>
      <h1>New Compoonet</h1>
    </div>
  )
}

export default main;

EOF
# let the user now we are done
echo "Created $folderName, happy hacking!"
