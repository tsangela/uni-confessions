import React from 'react';

class Emoji extends React.Component {
  render() {
    const { input } = this.props;
    return (
      <span role="img" aria-label="emoji">
        {input}
      </span>
    );
  }
}

export default Emoji;
