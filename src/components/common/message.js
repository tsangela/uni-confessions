import React from 'react';

class Message extends React.Component {
  render() {
    const { id, children, largeText } = this.props;
    return (
      <div id={id} className={`message${largeText ? ' message-about' : ''}`}>
        {children}
      </div>
    );
  }
}

export default Message;