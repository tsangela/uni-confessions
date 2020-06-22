import React from 'react';

const Empty = () => {
  return (
    <div className="message empty">
      <span role="img" aria-label="emoji" className="empty-image">
        🙈
      </span>
      <span className="empty-title">no messages yet!</span>
      <span className="empty-subtitle">care to contribute?</span>
    </div>
  );
};

export default Empty;
