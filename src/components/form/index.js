import React from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../../redux/actions/messages';

const NO_AGE = '--';
const DEFAULT_STATE = { 
  name: '',
  age: NO_AGE,
  text: ''
};

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.state = { 
      name: '',
      age: NO_AGE,
      text: ''
    };
  }
  
  clearForm = () => {
    this.setState(DEFAULT_STATE);
    this.ref.reset();
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = () => {
    // retrieve input
    const { name, age, text } = this.state;

    // validate input
    if (!name || age === NO_AGE || !text) {
      alert('please ensure that all fields are filled in 😊');
      return;
    }

    // generate date and id
    const now = new Date();
    const id = `${name}_${now.getTime()}`;
    const date = now.toLocaleString();

    // construct message
    const message = {id, date, name, age, text};

    // add message and clear form
    this.props.addMessage(message);
    this.clearForm();
  }

  render() {
    return (
      <div id='modal-form' className='modal'>
        <h1>tell me a secret</h1>
          <form ref={el => this.ref = el} id='confession-form'>
            <div className='form-inline'>
              <div id='form-name' className='form-group'>
                <label htmlFor='name'>name</label>
                <input type='text' id='name' name='name' placeholder='ex: anonymous' onBlur={this.handleChange}/>
              </div>
              <div id='form-age' className='form-group'>
                <label htmlFor='age'>age</label>
                <select id='age' name='age' value={this.state.age} onChange={this.handleChange}>
                  <option disabled value={NO_AGE}>{NO_AGE}</option>
                  <option value='< 18'>{`< 18`}</option>
                  <option value='18-24'>18-24</option>
                  <option value='25-34'>25-34</option>
                  <option value='35-44'>35-44</option>
                  <option value='45-54'>45-54</option>
                  <option value='55+'>55+</option>
                </select>
              </div>
            </div>
            <div className='form-group'>
              <label htmlFor='text'>confession</label>
              <textarea id='text' name='text' className='text-box' placeholder='type here...' onBlur={this.handleChange}/>
            </div>
            <div className='center-wrapper-button'>
              <div id='clear-button' className='form-button clear' onClick={this.clearForm}>clear</div>
              <div id='post-button' className='form-button post' onClick={this.handleSubmit}>post</div>
            </div>
          </form>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return { messages: state.messageReducer.messages };
};

export default connect(mapStateToProps, { addMessage })(Form);