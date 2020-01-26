import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';

import Main from 'App/Main';
import NavSwitchRouter from 'App/NavSwitchRouter';

function App() {
  return (
    <div>
      <Router>
        <NavSwitchRouter>
          <Route exact path="/" menuProps={{
            path: "/",
            label: "Home",
          }}>
            <Main />
          </Route>
          <Redirect to="/" />
        </NavSwitchRouter>
      </Router>
    </div>
  );
}

export default App;