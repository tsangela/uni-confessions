import React from 'react';
import portrait from '../../../images/photo.png';

class Portrait extends React.Component {
  render() {
    return (
      <img id='portrait' src={portrait} alt='portrait'/>
    );
  }
}

export default Portrait;