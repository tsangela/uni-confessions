import React from 'react';
import { Route } from 'react-router';
import NavButton from '../button/index';
import { routes } from '../../../resources/routes';
import RandomButton from '../button/random';

const NavBar = () => {
  return (
    <div id="nav-bar" className="nav">
      <NavButton route={routes.HOME} />
      <NavButton route={routes.ABOUT} />
      <Route
        path={routes.RANDOM.path}
        render={(props) => <RandomButton {...props} route={routes.RANDOM} />}
      />
    </div>
  );
};

export default NavBar;
