import React from 'react';

class Message extends React.Component {
  render() {
    const { id, children, about } = this.props;
    return (
      <div id={id} className={`message${about ? ' message-about' : ''}`}>
        {children}
      </div>
    );
  }
}

export default Message;
