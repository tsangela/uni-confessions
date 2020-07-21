import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';
import Message from './message';
import { MESSAGES_ENDPOINT } from '../../resources/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSpinner,
  faArrowAltCircleUp,
  faArrowAltCircleDown,
} from '@fortawesome/free-solid-svg-icons';
import {
  deleteMessage,
  selectMessage,
  updateMessageScore,
} from '../../redux/actions/messageActions';

const UP = 'UP';
const DOWN = 'DOWN';
const spinner = (
  <FontAwesomeIcon icon={faSpinner} className="spinner" aria-label="loading" />
);

const Confession = ({ _id, date, username, age, university, text, score }) => {
  const messages = useSelector((state) => state.messageReducer.messages);
  const dispatch = useDispatch();
  const [isDeleting, setIsDeleting] = useState(false);
  const [isFetchingUp, setIsFetchingUp] = useState(false);
  const [isFetchingDown, setIsFetchingDown] = useState(false);
  const deleteButtonRef = React.useRef(null);
  const voteUpRef = React.useRef(null);
  const voteDownRef = React.useRef(null);

  const containsTarget = (ref, target) => ref && ref.current.contains(target);

  const containsButtons = (target) =>
    containsTarget(deleteButtonRef, target) ||
    containsTarget(voteUpRef, target) ||
    containsTarget(voteDownRef, target);

  const handleSelect = (event, _id) => {
    // don't show details when delete button is clicked
    if (!containsButtons(event.target)) {
      dispatch(selectMessage(_id));
    }
  };

  const handleDelete = (_id) => {
    // trigger delete animation
    if (!isDeleting) {
      setIsDeleting(true);
    }

    // construct delete request
    const request = { method: 'DELETE' };

    // delete message with matching id from database
    fetch(`${MESSAGES_ENDPOINT}/${_id}`, request)
      // wait for delete animation to finish
      .then(() => setTimeout(() => dispatch(deleteMessage(_id)), 500))
      .catch((err) => {
        alert('Something bad happened, please try again later!');
      });
  };

  const handleVote = (_id, direction) => {
    // new score
    const message = messages.find((msg) => msg._id === _id);
    const oldScore = message.score;
    const score = direction === UP ? oldScore + 1 : oldScore - 1;
    const setIsFetching =
      direction === UP ? setIsFetchingUp : setIsFetchingDown;

    // construct post request
    const request = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ score }),
    };

    // start fetching
    setIsFetching(true);

    // update message with score
    fetch(`${MESSAGES_ENDPOINT}/${_id}/score`, request)
      .then((res) => res.json())
      .then((res) => dispatch(updateMessageScore(_id, res.score)))
      .then(() => setIsFetching(false))
      .catch((err) => {
        alert('Something bad happened, please try again later!');
      });
  };

  const handleKey = (event, fn, _id) => {
    // enter key
    if (event.key === 'Enter') {
      fn(event, _id);
    }
  };

  return (
    <div
      className={`delete-container${isDeleting ? ' deleting' : ''}`}
      title={date}
      role="button"
      tabIndex={0}
      onClick={(event) => handleSelect(event, _id)}
      onKeyDown={(event) => handleKey(event, handleSelect, _id)}
    >
      <Message id={_id}>
        <span
          ref={deleteButtonRef}
          id={`${_id}_delete`}
          className="delete"
          role="button"
          aria-label="delete message"
          tabIndex={0}
          onClick={() => handleDelete(_id)}
          onKeyDown={(event) => handleKey(event, handleDelete, _id)}
        />
        <div className="message-user-info">
          <div>
            <span className="message-username">{username}</span>
            <span className="message-age">{age}</span>
          </div>
          <span className={`message-university ${university}`}>
            {university.toUpperCase()}
          </span>
        </div>
        <p>{text}</p>
        <div className="message-vote-container">
          <span className="message-vote">{score}</span>
          <span ref={voteUpRef} className="message-vote-button">
            {isFetchingUp ? (
              spinner
            ) : (
              <FontAwesomeIcon
                icon={faArrowAltCircleUp}
                title="vote up"
                aria-label="vote up"
                role="button"
                onClick={() => handleVote(_id, UP)}
              />
            )}
          </span>
          <span ref={voteDownRef} className="message-vote-button">
            {isFetchingDown ? (
              spinner
            ) : (
              <FontAwesomeIcon
                icon={faArrowAltCircleDown}
                title="vote down"
                aria-label="vote down"
                role="button"
                onClick={() => handleVote(_id, DOWN)}
              />
            )}
          </span>
        </div>
      </Message>
    </div>
  );
};

export default Confession;

Confession.propTypes = {
  _id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  university: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
