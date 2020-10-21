import React, {Component} from 'react';
import CardList from '../../containers/Cardlist/Card-list';
import HomePageBanner from '../Banner/Banner';
import FeaturedCategoryList from '../FeaturedCategoryList/FeaturedCategoryList';

import './Home.scss'


export default class Home extends Component{
	render(){
		const recipe = {
			src: `${process.env.PUBLIC_URL+'assets/images/pumpkin-pad-thai-recipe.jpg'}`,
			alt: "Adobo"
		}
		return (
			<div className="home">
				<HomePageBanner image={recipe}>
					<p className='bannerTitle'>FIND DELICIOUS DISHES ALL OVER THE WORLD</p>
					<a href="/" className="btn btn-primary banner-button">EXPLORE</a>
				</HomePageBanner>
				<div className="wrapper">
					<div className="wrapInner">
						<section className="featuredRecipes">
							<h2 className="sectionTitle">Meals of the day</h2>
							<FeaturedCategoryList />
						</section>
						<section className="featuredRecipes">
							<h2 className="sectionTitle">Featured recipes</h2>
							<CardList />

						</section>
					</div>
				</div>
			</div>
		)
	}
}
