import './index.module.css';
import React, { Fragment } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import propsInterface from './propsInterface';
import iMenuProps from './NavMenu/propsInterface';
import NavMenu from './NavMenu';

/**
 * a wrapper for `react-router-dom`'s Switch component that uses antd to create a nav menu as well
 */
function main(props = propsInterface) {
  const menuProps = drivieMenuProps(props.children);
  return (
    <Fragment>
      <NavMenu menuProps={menuProps} />
      <Switch>
        {
          props.children
        }
        <Route>
          {renderBadUrl()}
        </Route>
      </Switch>
    </Fragment>
  );
}

function drivieMenuProps(children = []) {
  const { assign } = Object;
  const safeChildProps = (child) => {
    return (((child || {}).props || {}).menuProps || {});
  }
  const propsPluck = (child) => {
    return assign({}, safeChildProps(child), iMenuProps);
  }
  const menuProps = children.map(propsPluck);

  return menuProps;
}

/**
 * This is basically a built-in fail safe. I don't actaully use it as you may have noticed.
 */
function renderBadUrl() {
  return (
    <div>
      <h1>Well this is akward...</h1>
      <p>Some dev literally didn't setup the routes <i>they</i> made XD</p>
    </div>
  );
}

export default main;
