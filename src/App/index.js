import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';

import Main from './Main';
import NavSwitchRouter from './NavSwitchRouter';

function App() {
  return (
    <div>
      <Router>
        <NavSwitchRouter>
          <Route exact path="/">
            <Main />
          </Route>
          <Redirect to="/" />
        </NavSwitchRouter>
      </Router>
    </div>
  );
}

export default App;