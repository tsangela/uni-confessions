import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import { useHistory } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { selectMessage } from '../../../redux/actions/messageActions';
import { routes } from '../../../resources/routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RandomButton = ({ route }) => {
  const messages = useSelector((state) => state.messageReducer.messages);
  const dispatch = useDispatch();
  const history = useHistory();
  const { name, icon } = route;

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
      history.push(routes.RANDOM.path);

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
      aria-label="open random confession"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKey}
    >
      <span id={name} className="nav-button" title={name}>
        <FontAwesomeIcon icon={icon} />
        <span className={name} />
      </span>
    </div>
  );
};

export default withRouter(RandomButton);

RandomButton.propTypes = {
  route: PropTypes.object.isRequired,
};
