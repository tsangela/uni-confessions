import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }
  
  clearForm() {
    this.ref.reset();
  }

  render() {
    return (
      <div id='modal-form' className='modal'>
        <h1>tell me a secret</h1>
          <form ref={el => this.ref = el} id='confession-form'>
            <div className='form-inline'>
              <div id='form-name' className='form-group'>
                <label htmlFor='name'>name</label>
                <input type='text' id='name' name='name' placeholder='ex: anonymous'/>
              </div>
              <div id='form-age' className='form-group'>
                <label htmlFor='age'>age</label>
                <select id='age' name='age'>
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
              <label htmlFor='confession'>confession</label>
              <textarea id='confession' name='confession' className='text-box' placeholder='type here...'></textarea>
            </div>
            <div className='center-wrapper-button'>
              <div id='clear-button' className='form-button clear' onClick={() => this.clearForm()}>clear</div>
              <div id='post-button' className='form-button post'>post</div>
            </div>
          </form>
        </div>
    );
  }
}

export default Form;