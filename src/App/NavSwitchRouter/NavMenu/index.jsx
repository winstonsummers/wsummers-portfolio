import './index.module.css';
import React from 'react';
import propsInterface from './propsInterface';
import MenuItem from './MenuItem';

// This is the main function. Checkout the propsInterface file to learn
// more about what's going on here, the rest is pretty standard react :)
function main(props = propsInterface) {
  return (
    <div>
      <h1>New Componet</h1>
    </div>
  );
}



export default main;
