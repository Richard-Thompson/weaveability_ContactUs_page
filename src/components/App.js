import React, {Component} from 'react';

import TopNav from './TopNav';
import BottomNav from './BottomNav';
import TopBanner from './TopBanner';
import Map from './Map';
import Form from './Form';
import CommunicationCard from './CommunicationCard';
import BottomBanner from './BottomBanner';
import Footer from './Footer';

import '../css/MainSection.css';

class App extends Component {
  render () {
    return (
      <div>
        <TopNav />
        <BottomNav />
        <TopBanner />
        <div className="main-wrapper">
          <Map />
          <Form />
        </div>
        <div className="communication">
          <CommunicationCard 
            text={'Start a Live Chat with one of our Tech Team'} 
            action={'start'} 
            path={'images/button-icon-livechat.png'}/>
          <CommunicationCard 
            text={'Start a Skype Call with one of our Sales Team'}
            action={'Start'}
            path={'images/button-icon-skype.png'}/>
          <CommunicationCard
            text={'Send an email to our Customer Services Team'}
            action={'send'}
            path={'images/button-icon-email.png'}/>
        </div>
        <BottomBanner />
        <Footer />
      </div>
    );
  }
}
export default App;