import PropTypes from 'prop-types';
import React from 'react';
import Emoji from '../../common/emoji';

const ConnectButton = ({ name, url, emojiInput }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div
        className="connect-button"
        role="button"
        aria-label={`${name} button`}
      >
        <Emoji input={emojiInput} /> {name}
      </div>
    </a>
  );
};

export default ConnectButton;

ConnectButton.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  emojiInput: PropTypes.string.isRequired,
};
