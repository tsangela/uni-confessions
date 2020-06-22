import React from 'react';

const Empty = () => {
  const emojis = ['🙈', '🤔', '🤷🏻‍♀️', '😧', '😣', '🧐'];

  const getRandomEmoji = () => {
    const index = Math.floor(Math.random() * emojis.length);
    return emojis[index];
  };

  return (
    <div className="message empty">
      <span role="img" aria-label="emoji" className="empty-image">
        {getRandomEmoji()}
      </span>
      <span className="empty-title">no messages yet!</span>
      <span className="empty-subtitle">care to contribute?</span>
    </div>
  );
};

export default Empty;
