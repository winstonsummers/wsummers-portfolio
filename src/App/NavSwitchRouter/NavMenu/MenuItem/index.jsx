import './index.module.css';
import propsInterface from './propsInterface';
import React from 'react';
import { NavLink } from 'react-router-dom';

// This is the main function. Checkout the propsInterface file to learn
// more about what's going on here, the rest is pretty standard react :)
function main(props = propsInterface) {
  return (
    <NavLink 
      to={props.path} 
      activeClassName="selected"
      >
      {props.label}
    </NavLink>
  );
}

export default main;
