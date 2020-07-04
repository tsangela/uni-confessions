import React from 'react';
import { PropTypes } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard as faClipboardRegular } from '@fortawesome/free-regular-svg-icons';
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';

const Clipboard = ({
  username,
  age,
  university,
  text,
  handleCopyAnimation,
  isCopied,
}) => {
  const toFormattedText = () => `${username} (${age}) [${university}]\n${text}`;

  const handleCopy = () => {
    // copy to clipboard
    navigator.clipboard
      .writeText(toFormattedText())
      .then(() => {
        // good!
      })
      .catch((err) => {
        alert('could not copy text: ', err);
      });

    // animate
    handleCopyAnimation();
  };

  const handleKey = (event) => {
    // enter key
    if (event.key === 'Enter') {
      handleCopy();
    }
  };

  return (
    <span className="clipboard-button">
      {isCopied ? (
        <span className="copied" role="img" aria-label="copied">
          <FontAwesomeIcon icon={faClipboardCheck} />
          <span className="copied-text" />
        </span>
      ) : (
        <span
          className="copy"
          role="button"
          title="copy to clipboard"
          aria-label="copy to clipboard"
          tabIndex={0}
          onClick={handleCopy}
          onKeyDown={handleKey}
        >
          <FontAwesomeIcon icon={faClipboardRegular} />
        </span>
      )}
    </span>
  );
};

export default Clipboard;

Clipboard.propTypes = {
  username: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  university: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleCopyAnimation: PropTypes.func.isRequired,
  isCopied: PropTypes.bool.isRequired,
};
