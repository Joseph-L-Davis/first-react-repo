import React, { Component } from 'react';
import './App.css';
import './Header.css';



class App extends Component {

  render() {
    const subject = 'Mama';
    return (
      <header className="Header">
        <h1>My {subject} App...</h1>
      </header>
      
    );
  }

}

export default App;
