import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { PropTypes } from 'prop-types';

const Loader = ({ size, color }) => {
  return (
    <div className="center-wrapper">
      <FontAwesomeIcon
        className="spinner"
        icon={faSpinner}
        size={size}
        style={{ color }}
      />
    </div>
  );
};

export default Loader;

Loader.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};

Loader.defaultProps = {
  size: '1x',
  color: '#94a89a',
};
