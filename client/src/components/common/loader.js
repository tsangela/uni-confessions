import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Loader = () => {
  return (
    <div className="center-wrapper">
      <FontAwesomeIcon className="spinner" icon={faSpinner} size="3x" />
    </div>
  );
};

export default Loader;
