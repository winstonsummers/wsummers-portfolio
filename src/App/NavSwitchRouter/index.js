import React, { Fragment } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import propsInterface from './propsInterface';
import NavMenu from './NavMenu';

/**
 * a wrapper for `react-router-dom`'s Switch component that uses antd to create a nave menu as well as routing
 */
function main(props = propsInterface) {
  const menuProps = drivieMenuProps(props.children)
  return (
    <Fragment>
      <NavMenu menuProps={menuProps} />
      <Switch>
        {
          props.children
        }
        <Route>
          {renderError()}
        </Route>
      </Switch>
    </Fragment>
  );
}

function drivieMenuProps(children = []) {
  const { assign } = Object;
  const propsMapper = (child) => {
    return assign({}, child.props.menuProps, propsInterface);
  }
  const menuProps = children.map(propsMapper);

  return menuProps;
}

const renderError = () => {
  return (
    <div>
      <h1>Well this is akward...</h1>
      <p>Some dev literally didn't setup the routes they made</p>
    </div>
  );
}

export default main;