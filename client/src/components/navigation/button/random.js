import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import { useHistory } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { selectMessage } from '../../../redux/actions/messageActions';
import { getName, paths } from '../../../resources/paths';

const RandomButton = ({ path }) => {
  const messages = useSelector((state) => state.messageReducer.messages);
  const dispatch = useDispatch();
  const history = useHistory();
  const name = getName(path);

  const handleClick = () => {
    // no messages to choose from
    if (!messages || messages.length <= 0) {
      alert('no messages to view! 😧');
    }

    // pick a random message
    const index = Math.floor(Math.random() * Math.floor(messages.length));

    // validate message
    if (messages && Array.isArray(messages) && messages[index]) {
      // redirect to message board
      history.push(paths.HOME);

      // select message
      dispatch(selectMessage(messages[index]._id));
    }
  };

  const handleKey = (event) => {
    // enter key
    if (event.key === 'Enter') {
      handleClick(event);
    }
  };

  return (
    <div
      role="button"
      aria-label="random confession"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKey}
    >
      <span id={path} className="nav-button random-button" aria-label={path}>
        {name}
      </span>
    </div>
  );
};

export default withRouter(RandomButton);

RandomButton.propTypes = {
  path: PropTypes.string.isRequired,
};
