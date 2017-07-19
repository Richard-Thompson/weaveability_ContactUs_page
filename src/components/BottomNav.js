import React, {Component} from 'react';

import '../css/BottomNav.css';

class BottomNav extends Component {
  constructor (props) {
    super(props);

    this.state = {
      hamburgerDisplay: false
    };
    this.displayHamburger = this.displayHamburger.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  render () {
    return (
      <div>
        <div className="nav columns is-hidden-mobile">
              <a className="tab column"><strong>Home</strong></a>
              <a className="tab column"><strong>Projects</strong></a>
              <a className="tab column"><strong>News</strong></a>
              <a className="tab column"><strong>Careers</strong></a>
              <a className="tab column"><strong>Contact Us</strong></a>
              <a className="tab column"><strong>About Us</strong></a>
              <a className="tab column"><strong>Case Studies</strong></a>
              <a className="tab column"><strong>Blog</strong></a>
              <a className="tab column"><strong>Customers</strong></a>
        </div>
        <div className="hamburger-wrapper is-hidden-tablet is-hidden-desktop">
          <p>Menu</p>
            <div id="hamburger" onClick={this.onClick}>
              <span></span>
              <span></span>
              <span></span>
            </div>
        </div>
        <div>
            {this.state.hamburgerDisplay ? this.displayHamburger() : null}
       </div>
      </div>
    );
  }
  displayHamburger () {
    return (<div id="nav-hamburger" className="is-hidden-tablet is-hidden-desktop">
          <a className="hamburger-tab"><strong>Home</strong></a>
          <a className="hamburger-tab"><strong>Projects</strong></a>
          <a className="hamburger-tab"><strong>News</strong></a>
          <a className="hamburger-tab"><strong>Careers</strong></a>
          <a className="hamburger-tab"><strong>Contact Us</strong></a>
          <a className="hamburger-tab"><strong>About Us</strong></a>
          <a className="hamburger-tab"><strong>Case Studies</strong></a>
          <a className="hamburger-tab"><strong>Blog</strong></a>
          <a className="hamburger-tab"><strong>Customers</strong></a>
        </div>);
  }

  onClick () {
    this.setState({
      hamburgerDisplay: !this.state.hamburgerDisplay
    });
  }
}

export default BottomNav;