import React from 'react';
import propsInterface from './propsInterface';

// This is the main function. Checkout the propsInterface file to learn
// more about what's going on here, the rest is pretty standard react :)
const main = (props = propsInterface) => {
  return (
    <div>
      <h1>New Componet</h1>
    </div>
  );
}

export default main;
