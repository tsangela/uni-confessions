import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import { useHistory } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { selectMessage } from '../../../redux/actions/messages';
import { getName, paths } from '../../../resources/paths';

const RandomButton = ({ path }) => {
  const messages = useSelector((state) => state.messageReducer.messages);
  const dispatch = useDispatch();
  const history = useHistory();
  const name = getName(path);

  const handleClick = () => {
    // pick a random message
    const index = Math.floor(Math.random() * Math.floor(messages.length));

    // invalid message
    if (!(messages && Array.isArray(messages) && messages[index])) {
      return;
    }

    // redirect to message board
    history.push(paths.HOME);

    // select message
    dispatch(selectMessage(messages[index].id));
  };

  return (
    <div
      role="button"
      aria-label="random confession"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleClick}
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
