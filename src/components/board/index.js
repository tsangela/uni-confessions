import React from 'react';

class Board extends React.Component {
  render() {
    return (
      <div id='modal-board' className='modal'>
        <h1>wall of secrets</h1>
        <div className='clear-messages-wrapper'>
          <span id='clear-all' className='clear-messages-button'>clear all</span>
        </div>
      </div>
    );
  }
}

export default Board;