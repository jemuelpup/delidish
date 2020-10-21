import React, {Component} from 'react';
import { connect } from 'react-redux';
import HomePageBanner from '../Banner/Banner';
import CardList from '../../containers/Cardlist/Card-list';
import './Profile.scss'

class Profile extends Component{
	render(){
		const recipe = {
			src: `${process.env.PUBLIC_URL+'assets/images/adobo.jpg'}`,
			alt: "Adobo"
		}
		return (
			<div className="profile">
				<HomePageBanner image={recipe}>
					<p className='bannerTitle'>Jemuel Elimanco</p>
					<p className="qoute">Meals made with love.</p>
				</HomePageBanner>
				<div className="wrapper">
					<div className="wrapInner">
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

function mapStateToProps({ recipes }){
  return { recipes }
}

export default connect(mapStateToProps)(Profile)