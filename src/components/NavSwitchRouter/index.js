import React, { Fragment } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

const propsInterface = {
  children: []
}

/**
 * a wrapper for `react-router-dom`'s Switch component that uses antd to create a nave menu as well as routing
 */
function main(props = propsInterface) {
  return (
    <Fragment>
      <nav>
        {renderNav(props)}
      </nav>
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

const renderNav = (props = propsInterface) => {

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