import React, {Component} from 'react';

import '../css/TopNav.css';

class TopNav extends Component {
  render () {
    return (
      <div className="columns topnav-wrapper">
        <img className="column is-one-quarter logo" src="images/logo.png"/>
        <div className="column is-two-quarters  columns search-wrapper">
          <input className="search-box"/>
          <img className="search-box-icon" src="images/search.png"/>
        </div>
        <div className="column is-one-quarter columns loggedin-wrapper">
          <p>Logged in: John Smith</p>
          <img src="images/settings.png"/>
        </div>
      </div>
    );
  }
}

export default TopNav;