import React from 'react';

class Message extends React.Component {
  render() {
    const { id, children } = this.props;
    return (
      <div id={id} className='message'>
        {children}
      </div>
    );
  }
}

export default Message;