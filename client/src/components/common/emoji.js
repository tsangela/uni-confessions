import React from 'react';

const Emoji = ({ input }) => {
  return (
    <span role="img" aria-label="emoji">
      {input}
    </span>
  );
};

export default Emoji;
