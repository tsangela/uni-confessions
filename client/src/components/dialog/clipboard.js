import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import Emoji from '../common/emoji';

const CLIPBOARD_EMOJI = '📋';
const CHECKMARK_EMOJI = '✅';

const Clipboard = ({ username, age, university, text }) => {
  const [isCopied, setIdCopied] = useState(false);

  const toFormattedText = () => `${username} (${age}) [${university}]\n${text}`;
  const handleClick = () => {
    // copy to clipboard
    navigator.clipboard
      .writeText(toFormattedText())
      .then(() => {
        // good!
      })
      .catch((err) => {
        alert('could not copy text: ', err);
      });

    // animation
    setIdCopied(true);
    setTimeout(() => {
      setIdCopied(false);
    }, 1000);
  };

  const handleKey = (event) => {
    // enter key
    if (event.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <span
      className="copy-to-clipboard"
      title="copy to clipboard"
      role="button"
      aria-label="copy to clipboard"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKey}
    >
      {isCopied ? (
        <div className="copied">
          <Emoji input={CHECKMARK_EMOJI} />
          <i className="copied-text"> copied!</i>
        </div>
      ) : (
        <span className="clipboard">
          <Emoji input={CLIPBOARD_EMOJI} />
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
