import React from 'react';
import Emoji from '../../common/emoji';
import Message from '../../common/message';

const Description = () => {
  return (
    <div className="modal modal-about">
      <h1>
        the spaghetti <Emoji input="🍝" />
      </h1>
      <Message id="project-desc" about>
        <p>
          this is a small message board web app created for{' '}
          <span className="highlight">UBC CPSC 436I 2020S</span>.
        </p>
        <p>
          this spaghetti was cooked up with{' '}
          <span className="highlight">react</span>,{' '}
          <span className="highlight">redux</span>,{' '}
          <span className="highlight">es6</span>,{' '}
          <span className="highlight">nodejs</span>,{' '}
          <span className="highlight">express</span>, and{' '}
          <span className="highlight">mongodb</span>.
        </p>
        <p>
          knees weak, mom's spaghetti. <Emoji input="😩" />
        </p>
      </Message>
      <Message id="project-guide" about>
        <p>quick start:</p>
        <ol>
          <li>
            fill out your <span className="highlight">info</span>, and write
            whatever tea you want to spill in the{' '}
            <span className="highlight">text box</span>
          </li>
          <li>
            submit the <span className="highlight">juicy confession</span>
          </li>
          <li>
            see it posted on the{' '}
            <span className="highlight">wall of secrets</span>
          </li>
          <li>
            <span className="highlight">click</span> the confession to see it in
            all its glory
          </li>
          <li>
            close the pop-up and feel proud that you&apos;ve just posted your{' '}
            <span className="highlight">deepest, darkest secret</span> for the
            whole world to see... what have you just done?!
          </li>
          <li>
            <span className="highlight">hover</span> over your confession and
            click the <span className="highlight">delete button</span>
          </li>
          <li>do it all over again</li>
        </ol>
      </Message>
    </div>
  );
};

export default Description;
