import React from 'react';
import NavButton from './nav-button';
import { paths } from '../utils/constants';

class NavBar extends React.Component {
  render() {
    return (
      <div id='nav-bar' class='nav'>
        <NavButton path={paths.HOME} />
        <NavButton path={paths.ABOUT} />
      </div>
    );
  }
}

export default NavBar;

