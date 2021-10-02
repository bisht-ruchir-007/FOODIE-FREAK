import React from 'react';
import Img1 from './images/img1.jpg';
import Img2 from './images/img2.jpeg';
import Img3 from './images/img3.jpg';

const Ruchir = () => {
	return (
		<div id='carouselExampleInterval' className='carousel slide' data-ride='carousel'>
			<div className='carousel-inner'>
				<div className='carousel-item active' data-interval='6000'>
					<img src={Img1} className='rounded my-img' alt='...' />
				</div>
				<div className='carousel-item' data-interval='6000'>
					<img src={Img2} className=' rounded my-img' alt='...' />
				</div>
				<div className='carousel-item' data-interval='6000'>
					<img src={Img3} className='rounded my-img' alt='...' />
				</div>
			</div>
			<a className='carousel-control-prev' href='#carouselExampleInterval' role='button' data-slide='prev'>
				<span className='carousel-control-prev-icon' aria-hidden='true'></span>
				<span className='sr-only'>Previous</span>
			</a>
			<a className='carousel-control-next' href='#carouselExampleInterval' role='button' data-slide='next'>
				<span className='carousel-control-next-icon' aria-hidden='true'></span>
				<span className='sr-only'>Next</span>
			</a>
		</div>
	);
};

export default Ruchir;
