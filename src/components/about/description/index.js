import React from 'react';
import Emoji from '../../common/emoji';
import Message from '../../common/message';

class Description extends React.Component {
  render() {
    return (
    <div className='modal modal-about'>
        <h1>the spaghetti <Emoji input='🍝' /></h1>
        <Message id='project-desc'>
          <p>
            this is a small message board web app created for <span className='highlight'>UBC CPSC 436I 2020S</span>.
            this project was written in plain <span className='highlight'>html</span>, <span className='highlight'>css</span>,
            and <span className='highlight'>javascript</span>. yes, this is some bland spaghetti.
          </p>
        </Message>
        <Message id='project-guide'>
          <p>
            quick start:
          </p>
          <ol>
            <li>
              enter a <span className='highlight'>nickname</span> and select your <span className='highlight'>age range</span>
            </li>
            <li>
              submit your <span className='highlight'>juicy confession</span>
            </li>
            <li>
              see it posted on the <span className='highlight'>wall of secrets</span>
            </li>
            <li>
              immediately <span className='highlight'>regret</span>... what have you done?!
            </li>
            <li>
              <span className='highlight'>click</span> the confession you want to delete
            </li>
          </ol>
        </Message>
        <Message id='stay-home'>
          <p>
            stay home and wash your hands! <Emoji input='🚰' />
          </p>
        </Message>
    </div>
    );
  }
}

export default Description;