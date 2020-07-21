import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMessage, getMessages } from '../../redux/actions/messageActions';
import Confession from '../common/confession';
import Empty from './empty';
import { MESSAGES_ENDPOINT } from '../../resources/api';
import Loader from '../common/loader';

const Board = () => {
  const messages = useSelector((state) => state.messageReducer.messages);
  const dispatch = useDispatch();
  const [isDeleting, setIsDeleting] = useState(false);
  const [isFetchingGet, setIsFetchingGet] = useState(true);
  const [isFetchingDelete, setIsFetchingDelete] = useState(false);
  const [isSuccessDelete, setIsSuccessDelete] = useState(false);

  useEffect(() => {
    fetch(MESSAGES_ENDPOINT)
      .then((res) => res.json())
      .then((res) => {
        res.errorMessage
          ? alert('Something bad happened, please try again later!')
          : dispatch(getMessages(res));
        setIsFetchingGet(false);
      })
      .catch((err) => {
        alert('Something bad happened, please try again later!');
      });
  }, [dispatch]);

  const handleClick = () => {
    // trigger delete animation
    if (!isDeleting) {
      setIsDeleting(true);
    }

    // construct delete request
    const request = { method: 'DELETE' };

    // start fetching
    setIsFetchingDelete(true);

    // delete message with matching id from database
    fetch(MESSAGES_ENDPOINT, request).then((res) => {
      if (res.ok) {
        // iterate all messages
        const _ids = messages && messages.map((message) => message._id);

        // wait for animation to complete before deleting
        setTimeout(() => {
          _ids.forEach((_id) => dispatch(deleteMessage(_id))); // delete all messages
          setIsDeleting(false); // reset the state for the next time the board is cleared
        }, 500);

        // successfully deleted
        setIsSuccessDelete(true);
      } else {
        // something went wrong
        alert(`Oops! Unable clear all messages -- please try again later!`);
      }

      // fetch status
      setIsFetchingDelete(false);
    });
  };

  const handleKey = (event) => {
    // enter key
    if (event.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <div id="modal-board" className="modal">
      <h1>wall of secrets</h1>
      <div className="clear-messages-wrapper">
        <span
          id="clear-all"
          className="clear-messages-button"
          role="button"
          tabIndex={0}
          onClick={handleClick}
          onKeyDown={handleKey}
        >
          {isFetchingDelete ? 'clearing...' : 'clear all'}
        </span>
      </div>
      <div
        className={`message-container${
          isDeleting && isSuccessDelete && messages.length !== 0
            ? ' deleting'
            : ''
        }`}
      >
        {isFetchingGet ? (
          <Loader size="3x" />
        ) : (
          messages &&
          (messages.length > 0 ? (
            messages.map((message) => (
              <Confession
                key={message._id}
                _id={message._id}
                date={message.date}
                username={message.username}
                age={message.age}
                university={message.university}
                text={message.text}
                score={message.score}
              />
            ))
          ) : (
            <Empty />
          ))
        )}
      </div>
    </div>
  );
};

export default Board;
