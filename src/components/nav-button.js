import React from 'react';
import { getName } from '../utils/index';
import { NavLink } from "react-router-dom";

class NavButton extends React.Component {
  render() {
    const { path } = this.props;
    const name = getName(path);
    return (
      <NavLink to={path} role='button'>
        <span id={path} class='nav-button' role='img' aria-label={path}>
          {name}
        </span>
      </NavLink>
    );
  }
}

export default NavButton;