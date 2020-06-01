import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { useHistory } from 'react-router-dom';
import { selectMessage } from '../../../redux/actions/messages';
import { getName, paths } from '../../../resources/paths';

function RandomButton(props) {
  const history = useHistory();
  const { path, messages, selectMessage } = props;
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
  }

  return (
    <div role='button' aria-label='random button' onClick={handleClick}>
      <span id={path} className='nav-button random-button' aria-label={path}>
        {name}
      </span>
    </div>
  );
}

const mapStateToProps = state => {
  return { messages: state.messageReducer.messages };
};

export default withRouter(connect(mapStateToProps, { selectMessage })(RandomButton));