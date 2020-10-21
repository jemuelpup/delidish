import React, {Component} from 'react';
import HomePageBanner from '../Banner/Banner';
export default class Recipe extends Component{
	render(){
		const recipe = {
			src: `${process.env.PUBLIC_URL+'assets/images/adobo.jpg'}`,
			alt: "Adobo"
		}
		return (
			<div className="recipe">
				<HomePageBanner image={recipe}>
					<p className='bannerTitle'>ADOBO<br />(SOY CHICKEN)</p>
					<a href="/" className="btn btn-primary banner-button">MAKE IT</a>
				</HomePageBanner>
			</div>
		)
	}
}