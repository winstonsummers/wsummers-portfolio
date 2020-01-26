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
import propsInterface from './propsInterface';
import './index.css';

// This is the main function. Checkout the propsInterface file to learn
// more about what's going on here, the rest is pretty standard react :)
const main = (props = propsInterface) => {
  return (
    <div>
      <h1>New Compoonet</h1>
    </div>
  );
}

export default main;

EOF

cat <<EOF > $path/propsInterface.js
// This is you propsInterface. We pass it as the default props for our 
// components, which allows services like intelisense to provide better 
// example of the kind of props your constructor is looking for but it 
// also serves as an extendable object for writing props to pass to our components. 
// ie. ```const componentProps = Object.assign({}, propsToPass, propsInterface);
//        ...
//        <YourSuperAwesomeComponent {...componentProps} />```
const propsInterface = {

}

export default propsInterface;

EOF

cat <<EOF > $path/index.module.css
/* Whoooo! CSS RULEZ! */

EOF

# let the user now we are done
echo "Created $folderName, happy hacking!"
