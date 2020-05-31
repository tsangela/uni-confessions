import React from 'react';
import Message from './message';

class Confession extends React.Component {
  render() {
    const { id, date, name, age, text } = this.props;
    return (
      <Message id={id}>
        <span className='message-name'>{name}</span>
        <span className='message-age'>{age}</span>
        <div className='message-date'>{date}</div>
        {text}
      </Message>
    );
  }
}

export default Confession;