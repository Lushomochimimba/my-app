import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  {Pic} from './picture'
import {Cap} from './caption'
import {Carousel} from './slides'
import {imgUrls} from './slides'
import {Card} from './cards'

class App extends Component {
  render() {
    return (
      <div className="App">
      <div>
      {
        // Carousel
      }
      <Carousel/>
      {
        // cards
      }
      <Card/>
      </div>
      </div>
    );
  }
}

export default App;
