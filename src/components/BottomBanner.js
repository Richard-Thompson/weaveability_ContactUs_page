import React, {Component} from 'react';
import '../css/BottomBanner.css';

class BottomBanner extends Component {
  render () {
    return (
      <div id="hero-image-bottom">
        <div id="goodbye">
          <p id="in-touch"><strong>For more information....</strong></p>
          <p id="thankyou"> <strong>Contact Us</strong></p>
        </div>
      </div>
    );
  }
}

export default BottomBanner;