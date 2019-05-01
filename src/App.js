import React, { Component } from 'react';
import './App.css';
import Header from "./Component/Header/Header";

class App extends Component {
  render() {
    return (
      <div className="Apps">
        <header className="Apps-headers">
          <Header />
        </header>
      </div>
    );
  }
}

export default App;
