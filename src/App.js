import React from 'react';
import {Route} from "react-router";
import {BrowserRouter as Router} from "react-router-dom";
import './style/main.css';
import { paths } from './utils/constants';
import NavBar from './components/nav-bar';
import Home from './components/home';
import About from './components/about';

function App() {
  return (
    <Router>
      <NavBar />
      <div>hello</div>
      <Route exact path={process.env.PUBLIC_URL + paths.HOME} component={Home} />
      <Route exact path={process.env.PUBLIC_URL + paths.ABOUT} component={About} />
    </Router>
  );
}

export default App;