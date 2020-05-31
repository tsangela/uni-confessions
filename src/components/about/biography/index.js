import React from 'react';
import Portrait from './portrait';
import Emoji from '../../common/emoji';
import Message from '../../common/message';
import ConnectButton from './connect-button';

class Biography extends React.Component {
  render() {
    return (
      <div className='modal'>
        <h1>the chef <Emoji input='👩🏻‍🍳'/></h1>
        <Portrait />
        <Message id='bio'>
          <p>
            fancy meeting you here! my name is <span className='highlight'>angela tsang</span>
            and i am a 4th year computer science undergraduate at the university of british
            columbia. i am currently looking for <span className='highlight'>fall co-op opportunities</span>.
            might you know of any open postings? <Emoji input='👀' />
          </p>
        </Message>
        <Message id='connect'>
          <p>
            let's connect!
          </p>
          <div className='connect-wrapper'>
            <ConnectButton name='linkedin' url='https://www.linkedin.com/in/tsangela/' emojiInput='🔗' />
            <ConnectButton name='github' url='https://github.com/tsangela/' emojiInput='💻' />
          </div>
        </Message>
      </div>
    );
  }
}

export default Biography;