import React from 'react';

const Message = ({ id, children, about }) => {
  return (
    <div id={id} className={`message${about ? ' message-about' : ''}`}>
      {children}
    </div>
  );
};

export default Message;
