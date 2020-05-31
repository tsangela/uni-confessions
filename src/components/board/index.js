import React from 'react';
import { connect } from 'react-redux';
import { clearBoard, deleteMessage } from '../../redux/actions/messages';
import Message from '../common/message';

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
          <Message id={message.id}>{message.message}</Message>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { messages: state.messageReducer.messages };
};

export default connect(mapStateToProps, { deleteMessage, clearBoard })(Board);