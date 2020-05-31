// style={{cursor: 'pointer'}}

import React from 'react';
import Emoji from '../common/emoji';

class Clipboard extends React.Component {
  handleClick = event => {
    const { text } = this.props;
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log(`copied '${text}'`);
      })
      .catch(err => {
        console.log('could not copy text: ', err);
      })    
  }

  render() {
    return (
      <span className='clipboard' title='copy to clipboard' role='button' aria-label='copy to clipboard' onClick={this.handleClick}>
        <Emoji input='📋' />
      </span>
    );
  }
}

export default Clipboard;