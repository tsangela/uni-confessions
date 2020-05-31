import React from 'react';
import portrait from '../../../images/photo.png';

class Portrait extends React.Component {
  render() {
    return (
      <div className='center-wrapper'>
        <img id='portrait' src={portrait} alt='portrait'/>
      </div>
    );
  }
}

export default Portrait;