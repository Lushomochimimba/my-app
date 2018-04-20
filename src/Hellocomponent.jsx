import React, { Component } from 'react';


export class Hellocomponent extends Component {
  render() {
    return (
      <div>
      <h1
      OnMouseOver ={this.props.handler}>{this.props.message}
      </h1>
      </div>
    );
  }
}
