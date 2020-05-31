import React from 'react';
import {Route} from "react-router";
import {BrowserRouter as Router} from "react-router-dom";
import './style/main.css';
import { paths } from './utils/constants';
import NavBar from './components/navigation/bar/index';
import Home from './components/home/index';
import About from './components/about/index';

function App() {
  return (
    <Router>
      <NavBar />
      <div style={{height: 800}}>hello</div>
      <Route exact path={process.env.PUBLIC_URL + paths.HOME} component={Home} />
      <Route exact path={process.env.PUBLIC_URL + paths.ABOUT} component={About} />
    </Router>
  );
}

export default App;