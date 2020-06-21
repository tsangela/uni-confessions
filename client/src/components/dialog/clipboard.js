import React from 'react';
import { PropTypes } from 'prop-types';
import Emoji from '../common/emoji';

const CLIPBOARD_EMOJI = '📋';
const CHECKMARK_EMOJI = '✅';

class Clipboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false,
    };
  }

  handleClick = () => {
    const { text } = this.props;
    navigator.clipboard
      .writeText(text)
      .then(() => {
        // good!
      })
      .catch((err) => {
        alert('could not copy text: ', err);
      });
    this.setState({ copied: true });
    setTimeout(() => {
      this.setState({ copied: false });
    }, 1000);
  };

  render() {
    const { copied } = this.state;
    return (
      <span
        className="copy-to-clipboard"
        title="copy to clipboard"
        role="button"
        aria-label="copy to clipboard"
        tabIndex={0}
        onClick={this.handleClick}
        onKeyDown={this.handleClick}
      >
        {copied ? (
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
  }
}

export default Clipboard;

Clipboard.propTypes = {
  text: PropTypes.string.isRequired,
};
