import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';

import './index.module.css';
import Home from 'App/Home';
import About from 'App/About';
import Projects from 'App/Projects';
import NavSwitchRouter from 'App/NavSwitchRouter';

function App() {
  return (
    <div>
      <Router>
        <NavSwitchRouter>
          <Route exact path="/" menuProps={{
            path: "/",
            label: "@W",
          }}>
            <Home />
          </Route>
          <Route exact path="/about" menuProps={{
            path: "/about",
            label: "@W:About",
          }}>
            <About />
          </Route>
          <Route exact path="/projects" menuProps={{
            path: "/projects",
            label: "@W:Projects"
          }}>
            <Projects />
          </Route>
          <Redirect to="/" />
        </NavSwitchRouter>
      </Router>
    </div>
  );
}

export default App;