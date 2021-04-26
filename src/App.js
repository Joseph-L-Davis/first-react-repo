import { Component } from 'react';
import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
class App extends Component {

  render() {
    // const subject = 'Mama';
    return (
      <div className="App">
  
        <Header/>
        <main>List goes here</main>
        <Footer/>
      
      </div>
    );
  }

}

export default App;
