import React from 'react';
import Emoji from '../../common/emoji';

class ConnectButton extends React.Component {
  render() {
    const { name, url, emojiInput } = this.props;
    return (
      <a href={url} target='_blank' rel='noopener noreferrer'>
        <div className='connect-button' role='button' aria-label={name + ' button'}>
          <Emoji input={emojiInput} /> {name}
        </div>
      </a>
    );
  }
}

export default ConnectButton;