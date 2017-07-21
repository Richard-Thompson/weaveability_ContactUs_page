import React, {Component} from 'react';
import Modal from './Modal';
import '../css/Form.css';

class Form extends Component {
  constructor (props) {
    super(props);

    this.state = {
      formCompletionModalDisplay:false,
      email:'',
      confirmEmail:''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleConfirmEmailChange = this.handleConfirmEmailChange.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }
  render () {
    return (
      <div className="form-wrapper">
        <form id="contact-form" onSubmit={this.handleSubmit}>
          <div className="names-and-emails-wrapper">
            <div>
              <p>First Name</p>
              <input type="text" required/>
              <p>Last Name</p>
              <input type="text" required/>
            </div>
            <div>
              <p>Email</p>
              <input type="email" onChange={this.handleEmailChange} value={this.state.email} required/>
              <p>Confirm Email</p>
              <input type="email" onChange={this.handleConfirmEmailChange} value={this.state.confirmEmail} required/> 
            </div>
          </div>
          <div id="date-of-birth">
            <p>Date of Birth</p>
            <input id="date" type="date" required/>
            <button id="submit-button" type="submit">Submit</button>
          </div>
        </form>
        <Modal 
        display={this.state.formCompletionModalDisplay}
        title={'Submission Completed'}
        toggleModal={this.toggleModal}
        text={'It can take upto seven days to receive your brochure.'}
        />
      </div>
    );
  }
  handleEmailChange (event) {
    this.setState({
      email: event.target.value
    });
  }
   handleConfirmEmailChange (event) {
    this.setState({
      confirmEmail: event.target.value
    });
  }
  handleSubmit (event) {
    if (this.state.email !== this.state.confirmEmail) {
      alert('Please ensure both emails are the same.');
      event.preventDefault();
    }
    else {
      event.preventDefault();
      document.getElementById('contact-form').reset();
      this.setState({
        formCompletionModalDisplay: !this.state.formCompletionModalDisplay,
        email:'',
        confirmEmail:''
      });
      
    }
  }
  toggleModal () {
    this.setState({
      formCompletionModalDisplay: !this.state.formCompletionModalDisplay
    });
  }

}

export default Form;