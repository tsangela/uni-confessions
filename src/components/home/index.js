import React from 'react';
import Form from '../form';
import Board from '../board/index';

class Home extends React.Component {
  render() {
    return (
      <div className='center-wrapper'>
        <Form />
        <Board />
      </div>
    );
  }
}

export default Home;