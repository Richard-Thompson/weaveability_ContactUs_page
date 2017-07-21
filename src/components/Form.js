import React, {Component} from 'react';
import '../css/Form.css';

class Form extends Component {
  constructor (props) {
    super(props);

    this.state = {
      modalDisplay:false,
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
        <form onSubmit={this.handleSubmit}>
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
        <div className={this.state.modalDisplay ? 'modal is-active' : 'modal'}>
          <div className="modal-background"></div>
          <div className="modal-content">
            <div className="box">
              <p> This is the modal content </p>
            </div>
          </div>
          <button className="modal-close is-large" onClick={this.toggleModal}></button>
        </div>
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
      alert('please ensure both emails are the same');
      event.preventDefault();
    }
    else {
      event.preventDefault();
      this.setState({
        modalDisplay: !this.state.modalDisplay,
        email:'',
        confirmEmail:''
      });
      document.getElementById('contact-form').reset();
      
    }
  }
  toggleModal () {
    this.setState({
      modalDisplay: !this.state.modalDisplay
    });
  }

}

export default Form;