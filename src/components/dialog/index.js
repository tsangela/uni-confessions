/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { deleteMessage, deselectMessage } from '../../redux/actions/messages';
import Clipboard from './clipboard';

class Dialog extends React.Component {
  constructor(props) {
    super(props);
    this.dialogRef = React.createRef();
  }

  getMessage = (messages, selectedId) => {
    const selectedMessage = messages.filter(
      (message) => selectedId === message.id
    );
    return selectedMessage && selectedMessage.length === 1
      ? selectedMessage[0]
      : null;
  };

  handleClose = () => {
    const { deselectMessage } = this.props;
    deselectMessage();
  };

  render() {
    const { messages, selectedId } = this.props;

    // nothing selected
    if (!selectedId) {
      return null;
    }

    // retrieve selected message
    const selectedMessage = this.getMessage(messages, selectedId);
    const { id, date, username, age, university, text } = selectedMessage;

    // render dialog with message metadata
    return (
      <div className="center-wrapper dialog-container">
        <div className="dialog-overlay" onClick={this.handleClose} />
        <div className="modal dialog delete-container">
          <div className="title-bar">
            <span
              id={`${id}_close`}
              className="close"
              title="close"
              role="button"
              aria-label="close button"
              tabIndex={0}
              onClick={this.handleClose}
              onKeyDown={this.handleClose}
            />
          </div>
          <span className="message-date">{date}</span>
          <div className="user-info">
            <span className="message-username">{username}</span>
            <span className="message-age">{age}</span>
            <span className="message-university">
              {university.toUpperCase()}
            </span>
          </div>
          <span>{text}</span>
          <Clipboard text={text} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messageReducer.messages,
    selectedId: state.messageReducer.selectedId,
  };
};

export default connect(mapStateToProps, { deleteMessage, deselectMessage })(
  Dialog
);

Dialog.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedId: PropTypes.string,
  deselectMessage: PropTypes.func.isRequired,
};

Dialog.defaultProps = {
  selectedId: null,
};
