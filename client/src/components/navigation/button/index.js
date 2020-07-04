import React from 'react';
import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavButton = ({ route }) => {
  const { path, name, icon } = route;
  return (
    <NavLink to={path} role="button">
      <span id={name} className="nav-button" aria-label={name} title={name}>
        <FontAwesomeIcon icon={icon} />
        <span className={name} />
      </span>
    </NavLink>
  );
};

export default NavButton;

NavButton.propTypes = {
  route: PropTypes.object.isRequired,
};
