import React from 'react';
import { connect } from 'react-redux';
import { clearBoard } from '../../redux/actions/messages';
import Confession from '../common/confession';

class Board extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div id='modal-board' className='modal'>
        <h1>wall of secrets</h1>
        <div className='clear-messages-wrapper'>
          <span id='clear-all' className='clear-messages-button'>clear all</span>
        </div>
        {this.props.messages && this.props.messages.map(message => 
          <Confession key={message.id} 
                      id={message.id}
                      date={message.date}
                      name={message.name}
                      age={message.age} 
                      text={message.text}/>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { messages: state.messageReducer.messages };
};

export default connect(mapStateToProps, { clearBoard })(Board);