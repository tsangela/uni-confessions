import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { addMessage } from '../../redux/actions/messages';
import options from '../../resources/options.json';

const NONE = '--';
const DEFAULT_STATE = {
  username: '',
  age: NONE,
  university: NONE,
  text: '',
};

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.state = DEFAULT_STATE;
  }

  setFormRef = (ref) => {
    this.formRef = ref;
  };

  clearForm = () => {
    this.setState(DEFAULT_STATE);
    this.formRef.reset();
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = () => {
    // retrieve input
    const { username, age, university, text } = this.state;
    const { addMessage } = this.props;

    // validate input
    if (!username || age === NONE || university === NONE || !text) {
      alert('please ensure that all fields are filled in 😊');
      return;
    }

    // generate date and id
    const now = new Date();
    const id = `${username}_${now.getTime()}`;
    const date = now.toLocaleString();

    // construct message
    const message = { id, date, username, age, university, text };

    // add message and clear form
    addMessage(message);
    this.clearForm();
  };

  render() {
    const { age, university } = this.state;
    return (
      <div id="modal-form" className="modal">
        <h1>tell me a secret</h1>
        <form ref={this.setFormRef} id="confession-form">
          <div id="form-name" className="form-group">
            <label htmlFor="username">username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="ex: anonymous"
              onBlur={this.handleChange}
            />
          </div>
          <div className="form-inline">
            <div id="form-age" className="form-group">
              <label htmlFor="age">age</label>
              <select
                id="age"
                name="age"
                value={age}
                onChange={this.handleChange}
              >
                <option disabled value={NONE}>
                  {NONE}
                </option>
                {options.ageRanges.map((age) => (
                  <option key={age} value={age}>
                    {age}
                  </option>
                ))}
              </select>
            </div>
            <div id="form-university" className="form-group">
              <label htmlFor="university">university</label>
              <select
                id="university"
                name="university"
                value={university}
                onChange={this.handleChange}
              >
                <option disabled value={NONE}>
                  {NONE}
                </option>
                {options.universities.map((uni) => (
                  <option key={uni} value={uni}>
                    {uni}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="text">confession</label>
            <textarea
              id="text"
              name="text"
              className="text-box"
              placeholder="type here..."
              onBlur={this.handleChange}
            />
          </div>
          <div className="center-wrapper-button">
            <div
              id="clear-button"
              className="form-button clear"
              role="button"
              aria-label="clear form"
              tabIndex={0}
              onClick={this.clearForm}
              onKeyDown={this.clearForm}
            >
              clear
            </div>
            <div
              id="post-button"
              className="form-button post"
              role="button"
              aria-label="submit form"
              tabIndex={0}
              onClick={this.handleSubmit}
              onKeyDown={this.handleSubmit}
            >
              post
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { messages: state.messageReducer.messages };
};

export default connect(mapStateToProps, { addMessage })(Form);

Form.propTypes = {
  addMessage: PropTypes.func.isRequired,
};
