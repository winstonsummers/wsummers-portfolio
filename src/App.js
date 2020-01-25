import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          {renderMain()}
        </Route>
        <Route >
          {renderError()}
        </Route>
      </Switch>
    </Router>
  );
}

const renderError = () => {
  return (
    <div>
      <h1>Well this is akward...</h1>
    </div>
  )
}

const renderMain = () => {
  return (
    <div>
      <h1>Welcome to my website</h1>
      <p>It is one minute old today</p>
    </div>
  )
}

export default App;
