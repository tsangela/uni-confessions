import React from 'react';
import { Route } from 'react-router';
import NavButton from '../button/index';
import { paths } from '../../../resources/paths';
import RandomButton from '../button/random';

const NavBar = () => {
  return (
    <div id="nav-bar" className="nav">
      <NavButton path={paths.HOME} />
      <NavButton path={paths.ABOUT} />
      <Route
        path={paths.HOME}
        render={(props) => <RandomButton {...props} path={paths.RANDOM} />}
      />
    </div>
  );
};

export default NavBar;
