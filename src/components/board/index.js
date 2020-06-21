import React from 'react';
import { connect } from 'react-redux';
import { deleteMessage, clearBoard } from '../../redux/actions/messages';
import Confession from '../common/confession';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deleting: false
    }
  }

  handleClick = () => {
    // trigger delete animation
    const { deleting } = this.state;
    if (!deleting) {
      this.setState({ deleting: true });
    }
    
    // iterate all messages
    const { messages, deleteMessage } = this.props;
    const ids = messages && messages.map(message => message.id);

    // wait for animation to complete before deleting
    setTimeout(() => {
      ids.forEach(id => deleteMessage(id)); // delete all messages
      this.setState({ deleting: false }); // reset the state for the next time the board is cleared
    }, 500)
  }

  render() {
    const { messages } = this.props;
    const { deleting } = this.state;
    return (
      <div id='modal-board' className='modal'>
        <h1>wall of secrets</h1>
        <div className='clear-messages-wrapper'>
          <span id='clear-all' className='clear-messages-button' onClick={this.handleClick}>clear all</span>
        </div>
        <div className={`message-container${(deleting && messages.length !== 0) ? ' deleting' : ''}`}>
            {messages && messages.map(message => 
              <Confession key={message.id} 
                          id={message.id}
                          date={message.date}
                          username={message.username}
                          age={message.age} 
                          university={message.university} 
                          text={message.text}/>)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { messages: state.messageReducer.messages };
};

export default connect(mapStateToProps, { deleteMessage, clearBoard })(Board);