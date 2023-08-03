import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import data from './data';

export default function App() {
  const {banners} = data;
return (
	<div style={{ display: 'block', width: 1250, padding: 30 }}>
	<Carousel>
		<Carousel.Item interval={1500}>
		<img
			className="d-block w-100"
src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
			alt="Image One"
		/>
		<Carousel.Caption>
			<h3>{banners[0].text}</h3>
			<p>Sample Text for Image One</p>
		</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={500}>
		<img
			className="d-block w-100"
src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
			alt="Image Two"
		/>
		<Carousel.Caption>
    <h3>{banners[1].text}</h3>
			<p>Sample Text for Image Two</p>
		</Carousel.Caption>

		</Carousel.Item>
    <Carousel.Item interval={1500}>
		<img
			className="d-block w-100"
src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
			alt="Image One"
		/>
		<Carousel.Caption>
			<h3>{banners[2].text}</h3>
			<p>Sample Text for Image One</p>
		</Carousel.Caption>
		</Carousel.Item>
	</Carousel>
	</div>
);
}
