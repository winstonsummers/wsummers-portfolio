import './index.module.css';
import React from 'react';
import propsInterface from './propsInterface';
import MenuItem from './MenuItem';

// This is the main function. Checkout propsInterface.js to learn
// more about what's going on here, the rest is pretty standard react :)
function main(props = propsInterface) {
  const content = menuItemRenderer(props);
  return (
    <nav>
      {
        content  // i love this syntax, it's so unnecessarily prolific
      }
    </nav>
  );
}

function menuItemRenderer({menuProps}) {
  if(!Array.isArray(menuProps)) { menuProps = menuProps.menuProps }
  return menuProps.map(props => <MenuItem {...props} key={props.label}/>)
}

export default main;
