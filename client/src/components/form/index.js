import React, { useState } from 'react';
import uuid from 'react-uuid';
import { useDispatch } from 'react-redux';
import { addMessage } from '../../redux/actions/messageActions';
import options from '../../resources/options.json';
import { MESSAGES_ENDPOINT } from '../../resources/api';

const NONE = '--';
const DEFAULT_STATE = {
  username: '',
  age: NONE,
  university: NONE,
  text: '',
};

const Form = () => {
  const [message, setMessage] = useState(DEFAULT_STATE);
  const dispatch = useDispatch();
  const formRef = React.useRef(null);

  const clearForm = () => {
    // reset state
    setMessage(DEFAULT_STATE);

    // clear form
    formRef.current.reset();
  };

  const handleInput = (event) => {
    const input = { [event.target.name]: event.target.value };

    setMessage((prevState) => {
      return { ...prevState, ...input };
    });
  };

  const handleSubmit = () => {
    // validate input
    const { username, age, university, text } = message;
    if (!username || age === NONE || university === NONE || !text) {
      alert('please ensure that all fields are filled in 😊');
      return;
    }

    // generate date and id
    const now = new Date();
    const date = now.toLocaleString();
    const id = uuid();
    // const id = `${username}_${now.getTime()}`;

    // construct new message
    const newMessage = { id, date, username, age, university, text };

    // construct post request
    const request = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newMessage),
    };

    // add message to database and update redux state
    fetch(MESSAGES_ENDPOINT, request)
      .then((res) => res.json())
      .then((res) => dispatch(addMessage(newMessage)));

    // clear form
    clearForm();
  };

  const handleKey = (event, fn) => {
    // enter key
    if (event.key === 'Enter') {
      fn();
    }
  };

  return (
    <div id="modal-form" className="modal">
      <h1>tell me a secret</h1>
      <form ref={formRef} id="confession-form">
        <div id="form-name" className="form-group">
          <label htmlFor="username">username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="ex: anonymous"
            onBlur={handleInput}
          />
        </div>
        <div className="form-inline">
          <div id="form-age" className="form-group">
            <label htmlFor="age">age</label>
            <select
              id="age"
              name="age"
              value={message.age}
              onChange={handleInput}
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
              value={message.university}
              onChange={handleInput}
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
            onBlur={handleInput}
          />
        </div>
        <div className="center-wrapper-button">
          <div
            id="clear-button"
            className="form-button clear"
            role="button"
            aria-label="clear form"
            tabIndex={0}
            onClick={clearForm}
            onKeyDown={(event) => handleKey(event, clearForm)}
          >
            clear
          </div>
          <div
            id="post-button"
            className="form-button post"
            role="button"
            aria-label="submit form"
            tabIndex={0}
            onClick={handleSubmit}
            onKeyDown={(event) => handleKey(event, handleSubmit)}
          >
            post
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
