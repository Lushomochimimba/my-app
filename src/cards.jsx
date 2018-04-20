import React, { Component } from 'react';
import music from './music.jpg'
import text from './text.jpg'
import tv from './tv.jpg'

export class Card extends Component {
  render() {

    return (

      <div>

        <div className = "picture" >
        </div>

        <div className = "center">


    </div>

    <h1 className = "center2"></h1>

    <div className="container">

      <div className="row">

        <div className = "col-md-4 hold card">

          <img className = "resize" src={music}/>

          <button><i className="fas fa-heart"></i></button>

        </div>

        <div className = "col-md-4 hold card">

          <img className = "resize" src={text}/>

          <button><i className="far fa-heart"></i></button>

        </div>

        <div className = "col-md-4 hold card">

          <img className = "resize" src={tv}/>

          <button><i className="far fa-heart"></i></button>

        </div>

        <div className = "col-md-4 hold card">

          <img className = "resize" src={}/>

          <button><i className="far fa-heart"></i></button>

        </div>

        <div className = "col-md-4 hold card">

          <img className = "resize" src={}/>

          <button><i className="far fa-heart"></i></button>

        </div>

        <div className = "col-md-4 hold card">

          <img className = "resize" src={}/>

          <button><i className="far fa-heart"></i></button>

        </div>

        <div className = "col-md-4 hold card">

          <img className = "resize" src={}/>

          <button><i className="far fa-heart"></i></button>

        </div>

        <div className = "col-md-4 hold card">

          <img className = {}/>

        <button><i class="far fa-heart"></i></button>

        </div>

        <div className = "col-md-4 hold card">

          <img className = "resize" src="https://images.unsplash.com/photo-1518614768202-663a3a0ecf59?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=908a0ab5ff1226fbdd7f9ebf0e5590c6&auto=format&fit=crop&w=400&q=60"/>

          <button><i className="far fa-heart"></i></button>

        </div>

      </div>



    </div>

    <footer id="choose"></footer>

      </div>

    );

  }

}
