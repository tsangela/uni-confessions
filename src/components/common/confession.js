import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Message from './message';
import { deleteMessage, selectMessage } from '../../redux/actions/messages';

class Confession extends React.Component {
  constructor(props) {
    super(props);
    this.deleteButtonRef = React.createRef();
    this.state = {
      deleting: false,
    };
  }

  setDeleteButtonRef = (ref) => {
    this.deleteButtonRef = ref;
  };

  handleSelect = (event, id) => {
    const { selectMessage } = this.props;
    // don't show details when delete button is clicked
    if (this.deleteButtonRef && !this.deleteButtonRef.contains(event.target)) {
      selectMessage(id);
    }
  };

  handleDelete = (id) => {
    // trigger delete animation
    const { deleting } = this.state;
    if (!deleting) {
      this.setState({ deleting: true });
    }

    // wait for animation to complete before deleting
    const { deleteMessage } = this.props;
    setTimeout(() => {
      deleteMessage(id);
    }, 500);
  };

  render() {
    const { deleting } = this.state;
    const { id, date, username, age, university, text } = this.props;
    return (
      <div
        className={`delete-container${deleting ? ' deleting' : ''}`}
        title={date}
        role="button"
        tabIndex={0}
        onClick={(event) => this.handleSelect(event, id)}
        onKeyDown={(event) => this.handleSelect(event, id)}
      >
        <Message id={id}>
          <span
            ref={this.setDeleteButtonRef}
            id={`${id}_delete`}
            className="delete"
            role="button"
            aria-label="delete message"
            tabIndex={0}
            onClick={() => this.handleDelete(id)}
            onKeyDown={() => this.handleDelete(id)}
          >
            -
          </span>
          <span className="message-username">{username}</span>
          <span className="message-age">{age}</span>
          <span className={`message-university ${university}`}>
            {university.toUpperCase()}
          </span>
          <p>{text}</p>
        </Message>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { messages: state.messageReducer.messages };
};

export default connect(mapStateToProps, { selectMessage, deleteMessage })(
  Confession
);

Confession.propTypes = {
  id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  university: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  selectMessage: PropTypes.func.isRequired,
  deleteMessage: PropTypes.func.isRequired,
};
