import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard as faClipboardRegular } from '@fortawesome/free-regular-svg-icons';
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';

const Clipboard = ({ username, age, university, text }) => {
  const [isCopied, setIsCopied] = useState(null);

  useEffect(() => () => clearTimeout(isCopied), [isCopied]);

  const toFormattedText = () => `${username} (${age}) [${university}]\n${text}`;

  const handleCopy = () => {
    // copy to clipboard
    navigator.clipboard
      .writeText(toFormattedText())
      .then(() => setIsCopied(setTimeout(() => setIsCopied(null), 1000)))
      .catch((err) => {
        alert('could not copy text: ', err);
      });
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
};
