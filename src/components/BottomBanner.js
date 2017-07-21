import React, {Component} from 'react';
import '../css/BottomBanner.css';

class BottomBanner extends Component {
  render () {
    return (
      <div id="hero-image-bottom">
        <div id="goodbye">
          <p id="in-touch"><strong>We will be in touch</strong></p>
          <p id="thankyou"> <strong>Thankyou</strong></p>
        </div>
      </div>
    );
  }
}

export default BottomBanner;