import React from 'react';
import NavButton from '../button/index';
import { paths } from '../../../utils/constants';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }
  
  render() {
    return (
      <div ref={this.ref} id='nav-bar' className='nav nav-scroll'>
        <NavButton path={paths.HOME} />
        <NavButton path={paths.ABOUT} />
      </div>
    );
  }
}

export default NavBar;

