import React from 'react';
import NavButton from '../button/index';
import { paths } from '../../../resources/paths';

class NavBar extends React.Component {
  render() {
    return (
      <div id='nav-bar' className='nav'>
        <NavButton path={paths.HOME} />
        <NavButton path={paths.ABOUT} />
      </div>
    );
  }
}

export default NavBar;

