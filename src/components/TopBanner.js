import React, {Component} from 'react';

import '../css/TopBanner.css';

class TopBanner extends Component {
  render() {
    return (
      <div>
        <div id="hero-image-top">
          <div className="info">
            <p id="more-info">
              <strong>For more information....</strong>
            </p>
            <p id="contact">
              <strong>Contact Us</strong>
            </p>
          </div>
        </div>
        <p id="details"> Send us your details to request our latest brochure</p>
      </div>
    );
  }
}

export default TopBanner;