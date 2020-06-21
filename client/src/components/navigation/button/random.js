import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { useHistory } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { selectMessage } from '../../../redux/actions/messages';
import { getName, paths } from '../../../resources/paths';

const RandomButton = ({ path, messages, selectMessage }) => {
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
    selectMessage(messages[index].id);
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

const mapStateToProps = (state) => {
  return { messages: state.messageReducer.messages };
};

export default withRouter(
  connect(mapStateToProps, { selectMessage })(RandomButton)
);

RandomButton.propTypes = {
  path: PropTypes.string.isRequired,
  messages: PropTypes.string.isRequired,
  selectMessage: PropTypes.func.isRequired,
};
