import React from 'react';
import Emoji from '../common/emoji';

const CLIPBOARD_EMOJI = '📋';
const CHECKMARK_EMOJI = '✅';

class Clipboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false
    };
  }

  handleClick = event => {
    const { text } = this.props;
    navigator.clipboard.writeText(text)
      .then(() => {
        // good!
      })
      .catch(err => {
        alert('could not copy text: ', err);
      });
    this.setState({ copied: true });
  }

  render() {
    const { copied } = this.state;
    return (
      <span className='copy-to-clipboard' title='copy to clipboard' role='button' aria-label='copy to clipboard' onClick={this.handleClick}>
        {copied
          ? <div className='copied'>
              <Emoji input={CHECKMARK_EMOJI} /><i className='copied-text'> copied!</i>
            </div>
          : <span className='clipboard'>
              <Emoji input={CLIPBOARD_EMOJI} />
            </span>}
      </span>
    );
  }
}

export default Clipboard;