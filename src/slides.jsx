import React, { Component } from 'react';
import art from './art.jpg'
import food from './food.jpg'
import car from './car.jpg'

export const caption = [
 'art','food','ride'
]
 export const imgUrls = [
  art,food,car
]
export class Carousel extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			currentImageIndex: 0,
      currentWordIndex: 0
		};


		this.nextSlide = this.nextSlide.bind(this);
		this.previousSlide = this.previousSlide.bind(this);
	}

	previousSlide () {
		const lastIndex = imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === 0;
		const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;

		this.setState({
			currentImageIndex: index
		});

    const lastIndexe = imgUrls.length - 1;
    const { currentWordIndex } = this.state;
    const shouldResetIndexe = currentWordIndex === 0;
    const indexWord =  shouldResetIndex ? lastIndex : currentWordIndex - 1;

    this.setState({
      currentWordIndex: indexWord
    });
	}

	nextSlide () {
		const lastIndex = imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === lastIndex;
		const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

		this.setState({
			currentImageIndex: index
		});
    const lastIndexe = imgUrls.length - 1;
    const { currentWordIndex } = this.state;
    const shouldResetIndexe = currentWordIndex === lastIndex;
    const indexWord =  shouldResetIndex ? 0 : currentWordIndex + 1;

    this.setState({
			currentWordIndex: indexWord
		});
	}

	render () {
		return (
			<div className="carousel">
				<Arrow direction="left" clickFunction={ this.previousSlide } glyph="&#9664;" />
        <h1> {caption[this.state.currentWordIndex] }</h1>
        <img src={imgUrls[this.state.currentImageIndex] } style={{width:1210 +'px',height: 650 +'px'}}/>
				<Arrow direction="right" clickFunction={ this.nextSlide } glyph="&#9654;" />
			</div>
		);
	}
}


const Arrow = ({ direction, clickFunction, glyph }) => (
<div
  className={ `slide-arrow ${direction}` }
  onClick={ clickFunction }>
  { glyph }
</div>
);
const ImageSlide = ({ url }) => {
	const styles = {
		backgroundImage: `url(${url})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center'
	};

	return (
		<div className="image-slide" style={styles}></div>
	);
}
