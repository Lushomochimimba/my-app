import React, { Component } from 'react';


export class desc extends Component {
  render() {
    return (
      <div>
    <Hellocomponent message = {this.props.message}/>
    <p>{this.props.desc}</p>
      </div>
    );
  }
}
