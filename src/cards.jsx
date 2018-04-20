import React, { Component } from 'react';
import music from './music.jpg'
import text from './text.jpg'
import tv from './tv.jpg'
import ice from './ice.jpg'
import cupcake from './cupcake.jpg'
import cookie from './cookie.jpg'
import calendar from './calendar.jpg'
export class Card extends Component {
  render() {

    return (

      <div>

        <div className = "picture" >
        </div>

        <div className = "center">


    </div>
calendar
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

          <img className = "resize" src={ice}/>

          <button><i className="far fa-heart"></i></button>

        </div>

        <div className = "col-md-4 hold card">

          <img className = "resize" src={cupcake}/>

          <button><i className="far fa-heart"></i></button>

        </div>

        <div className = "col-md-4 hold card">

          <img className = "resize" src={cookie}/>

          <button><i className="far fa-heart"></i></button>

        </div>

        <div className = "col-md-4 hold card">

          <img className = "resize" src={calendar}/>

          <button><i className="far fa-heart"></i></button>

        </div>

        <div className = "col-md-4 hold card">

          <img className="resize" src={ice}/>

        <button><i class="far fa-heart"></i></button>

        </div>

        <div className = "col-md-4 hold card">

          <img className = "resize" src={cupcake} />

          <button><i className="far fa-heart"></i></button>

        </div>

      </div>



    </div>

    <footer id="choose"></footer>

      </div>

    );

  }

}
