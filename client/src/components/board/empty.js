import React, { useEffect, useState } from 'react';

const emojis = ['🙈', '🤔', '🤷🏻‍♀️', '😧', '😣', '🧐'];

const getRandomEmoji = () => {
  const index = Math.floor(Math.random() * emojis.length);
  return emojis[index];
};

const Empty = () => {
  const [emoji, setEmoji] = useState(null);

  useEffect(() => {
    setEmoji(getRandomEmoji());
  }, [emoji]);

  return (
    <div className="message empty">
      <span role="img" aria-label="emoji" className="empty-image">
        {emoji}
      </span>
      <span className="empty-title">no messages yet!</span>
      <span className="empty-subtitle">care to contribute?</span>
    </div>
  );
};

export default Empty;
