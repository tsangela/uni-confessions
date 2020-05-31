import React from 'react';
import './style.css'
import Biography from './biography/index';
import Description from './description/index';

class About extends React.Component {
  render() {
    return (
      <div className='center-wrapper'>
        <Biography />
        <Description />
      </div>
    );
  }
}

export default About;

