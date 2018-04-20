import React, { Component } from 'react';
import marvel from './marvel.jpg'





export class Pic  extends Component {
  render() {
    return (
      <div>
      < img src = {marvel} alt='Heros'/>
      </div>
    );
  }
}
