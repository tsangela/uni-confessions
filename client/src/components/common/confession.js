import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import Message from './message';
import { deleteMessage, selectMessage } from '../../redux/actions/messages';

const Confession = ({ id, date, username, age, university, text }) => {
  const dispatch = useDispatch();
  const [deleting, setDeleting] = useState(false);
  const deleteButtonRef = React.useRef(null);

  const handleSelect = (event, id) => {
    // don't show details when delete button is clicked
    if (deleteButtonRef && !deleteButtonRef.current.contains(event.target)) {
      dispatch(selectMessage(id));
    }
  };

  const handleDelete = (id) => {
    // trigger delete animation
    if (!deleting) {
      setDeleting(true);
    }

    // wait for animation to complete before deleting
    setTimeout(() => {
      dispatch(deleteMessage(id));
    }, 500);
  };

  const handleKey = (event, fn, id) => {
    // enter key
    if (event.key === 'Enter') {
      fn(event, id);
    }
  };

  return (
    <div
      className={`delete-container${deleting ? ' deleting' : ''}`}
      title={date}
      role="button"
      tabIndex={0}
      onClick={(event) => handleSelect(event, id)}
      onKeyDown={(event) => handleKey(event, handleSelect, id)}
    >
      <Message id={id}>
        <span
          ref={deleteButtonRef}
          id={`${id}_delete`}
          className="delete"
          role="button"
          aria-label="delete message"
          tabIndex={0}
          onClick={() => handleDelete(id)}
          onKeyDown={(event) => handleKey(event, handleDelete, id)}
        >
          -
        </span>
        <div className="message-metadata">
          <div>
            <span className="message-username">{username}</span>
            <span className="message-age">{age}</span>
          </div>
          <span className={`message-university ${university}`}>
            {university.toUpperCase()}
          </span>
        </div>
        <p>{text}</p>
      </Message>
    </div>
  );
};

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
