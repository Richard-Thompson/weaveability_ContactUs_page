import React, {Component} from 'react';
import '../css/CommunicationCard.css';

class CommunicationCard extends Component {
  render () {
    return (
      <section>
        <p>{this.props.text}</p>
        <button>
          <p>{this.props.action}</p>
          <img src={this.props.path}/>
        </button>
      </section>
    );
  }
}

export default CommunicationCard;