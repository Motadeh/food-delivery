import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className= "header-div">
            <ul className="header">
              <li className="header">Deliver</li>
              <li className="header">Courier Services</li>
              <li className="header">Food Delivery</li>
              <li className="header">How it works</li>
              <li className="header">FAQs</li>
              <li className="header">Sign In</li>
              <li className="header">Become A Dispatcher</li>
            </ul>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;