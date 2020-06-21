import React from 'react';
import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { getName } from '../../../resources/paths';

const NavButton = ({ path }) => {
  const name = getName(path);
  return (
    <NavLink to={path} role="button">
      <span id={path} className="nav-button" aria-label={path}>
        {name}
      </span>
    </NavLink>
  );
};

export default NavButton;

NavButton.propTypes = {
  path: PropTypes.string.isRequired,
};
