import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { routes } from './resources/routes';
import NavBar from './components/navigation/bar/index';
import Home from './components/home/index';
import About from './components/about/index';

function App() {
  return (
    <Router>
      <NavBar />
      <Route
        exact
        path={process.env.PUBLIC_URL + routes.HOME.path}
        component={Home}
      />
      <Route
        exact
        path={process.env.PUBLIC_URL + routes.ABOUT.path}
        component={About}
      />
    </Router>
  );
}

export default App;
