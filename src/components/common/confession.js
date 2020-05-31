import React from 'react';
import Message from './message';
import { connect } from 'react-redux';
import { deleteMessage, selectMessage } from '../../redux/actions/messages';

class Confession extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deleting: false
    }
  }

  handleSelect = id => {
    this.props.selectMessage(id);
  }

  handleDelete = id => {
    // trigger delete animation
    const { deleting } = this.state;
    if (!deleting) {
      this.setState({ deleting: true });
    }

    // wait for animation to complete before deleting
    setTimeout(() => {this.props.deleteMessage(id)}, 500);
  }
  
  render() {
    const { deleting } = this.state;
    const { id, date, name, age, text } = this.props;
    return (
      <div className={`delete-container${deleting ? ' deleting' : ''}`} onClick={() => this.handleSelect(id)}>
        <Message id={id}>
          <span id={`${id}_delete`} className='delete' onClick={() => this.handleDelete(id)}>-</span>
          <span className='message-name'>{name}</span>
          <span className='message-age'>{age}</span>
          <p>{text}</p>
        </Message>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { messages: state.messageReducer.messages };
};

export default connect(mapStateToProps, { selectMessage, deleteMessage })(Confession);