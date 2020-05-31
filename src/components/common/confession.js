import React from 'react';
import Message from './message';
import { connect } from 'react-redux';
import { deleteMessage } from '../../redux/actions/messages';

class Confession extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deleting: false
    }
  }

  handleClick = id => {
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
      <div className={`delete-container${deleting ? ' deleting' : ''}`}>
        <Message id={id}>
          <span id={`${id}_delete`} className='delete' onClick={() => this.handleClick(id)}>x</span>
          <span className='message-name'>{name}</span>
          <span className='message-age'>{age}</span>
          <div className='message-date'>{date}</div>
          <p>{text}</p>
        </Message>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { messages: state.messageReducer.messages };
};

export default connect(mapStateToProps, { deleteMessage })(Confession);