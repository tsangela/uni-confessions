import React from 'react';
import Emoji from '../../common/emoji';
import Message from '../../common/message';

class Description extends React.Component {
  render() {
    return (
    <div className='modal modal-about'>
        <h1>the spaghetti <Emoji input='🍝' /></h1>
        <Message id='project-desc' largeText>
          <p>
            this is a small message board web app created for <span className='highlight'>UBC CPSC 436I 2020S</span>. this spaghetti was implemented using <span className='highlight'>react</span>, <span className='highlight'>redux</span>, and <span className='highlight'>es6</span>. yes, quite the bland dish still.
          </p>
        </Message>
        <Message id='project-guide' largeText>
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
              <span className='highlight'>click</span> the confession to see more details
            </li>
            <li>
              click outside the dialog and feel proud that you've just posted your <span className='highlight'>deepest, darkest secret</span> for the whole world to see...
            </li>
            <li>
              what have you just done?!
            </li>
            <li>
              <span className='highlight'>hover</span> over confession your confession to find the delete button
            </li>
            <li>
              do it all over again
            </li>
          </ol>
        </Message>
    </div>
    );
  }
}

export default Description;