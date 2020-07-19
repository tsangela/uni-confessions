import React from 'react';

const Message = ({ _id, children, about }) => {
  return (
    <div id={_id} className={`message${about ? ' message-about' : ''}`}>
      {children}
    </div>
  );
};

export default Message;
