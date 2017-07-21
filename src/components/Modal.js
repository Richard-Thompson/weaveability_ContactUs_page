import React, {Component} from 'react';

class Modal extends Component {
  render () {
    return (
        <div className={this.props.display ? 'modal is-active' : 'modal'}>
          <div className="modal-background"></div>
          <div className="modal-content">
            <div className="box">
              <h1 className="title is-1">{this.props.title}</h1>
              <p>{this.props.text}</p>
            </div>
          </div>
          <button className="modal-close is-large" onClick={this.props.toggleModal}></button>
        </div>
    );
  }
}

export default Modal;