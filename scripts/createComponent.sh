#!/bin/sh

folderName=$1
path="./src/App/$folderName"


echo
echo "creating your component dir and index files {name: $folderName, path: $path}"
echo


if [ -d "$path" ]; then
  echo "$path is already a dir"
else 
  mkdir $path
  echo "created $path dir"
fi

echo

indexJs="$path/index.jsx"
if [ -f "$indexJs" ]; then
  echo "$indexJs already exists"
else 

cat <<EOF > $indexJs
import React from 'react';

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

echo "created $indexJs"

fi

echo

propsInterface="$path/propsInterface.js"
if [ -f "$propsInterface" ]; then
  echo "$propsInterface already exists"
else 
cat <<EOF > $propsInterface
// This is you propsInterface. We pass it as the default props for our 
// components, which allows services like intelisense to provide better 
// example of the kind of props your constructor is looking for but it 
// also serves as an extendable object for writing props to pass to our components. 
// ie. const componentProps = Object.assign({}, propsToPass, propsInterface);
//        ...
//        <YourSuperAwesomeComponent {...componentProps} />
const propsInterface = {

}

export default propsInterface;

EOF

echo "import propsInterface from './propsInterface';
$(cat $indexJs)" > $indexJs

echo "created $propsInterface"

fi

echo

indexModuleCss="$path/index.module.css"
if [ -f "$indexModuleCss" ]; then
  echo "$indexModuleCss already exists"
else 
cat <<EOF > $indexModuleCss
/* Whoooo! CSS RULEZ! */

EOF

echo "import './index.module.css';
$(cat $indexJs)" > $indexJs

echo "created $indexModuleCss"

fi


# let the user now we are done
echo
echo "Created $folderName component, happy hacking!"
echo
