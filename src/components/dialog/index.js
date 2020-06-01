import React from 'react';
import { connect } from 'react-redux';
import { deleteMessage, deselectMessage } from '../../redux/actions/messages';
import Clipboard from './clipboard';

class Dialog extends React.Component {
  getMessage = (messages, selectedId) => {
    const selectedMessage = messages.filter(message => selectedId === message.id);
    return (selectedMessage && selectedMessage.length === 1) ? selectedMessage[0] : null;
  }

  handleClose = () => {
    this.props.deselectMessage();
  }

  render() {
    const { messages, selectedId } = this.props;

    // nothing selected
    if (!selectedId) {
      return null;
    }

    // retrieve selected message
    const selectedMessage = this.getMessage(messages, selectedId);
    const { id, date, name, age, text } = selectedMessage;

    // render dialog with message metadata
    return (
      <div className='center-wrapper dialog-container'>
        <div className='dialog-overlay' onClick={this.handleClose}/>
        <div className='modal dialog delete-container'>
          <div className='title-bar'>
            <span id={`${id}_close`} className='close' onClick={this.handleClose}>x</span>
          </div>
          <span className='message-date'>{date}</span>
          <span className='message-name'>{name}</span>
          <span className='message-age'>{age}</span>
          <div style={{ margin: '20px 0' }}/>
          <span>{text}</span>
          <Clipboard text={text}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { messages: state.messageReducer.messages, selectedId: state.messageReducer.selectedId };
};

export default connect(mapStateToProps, { deleteMessage, deselectMessage })(Dialog);