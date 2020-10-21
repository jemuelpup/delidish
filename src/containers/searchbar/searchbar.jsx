import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchWeather from '../../actions/index';
import {ReactComponent as SearchIcon} from './searchicon.svg';
import './searchbar.scss'


class SearchBar extends Component{

	constructor(props){
		super(props);

		this.state = {
			searchtext: '',
		}

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	// change handler of the input
	onInputChange(event){
		this.setState({
			searchtext: event.target.value
		})
	}

	// submit the search text
	onFormSubmit(event){
		event.preventDefault();
		this.props.fetchWeather(this.state.searchtext);
		this.setState({ searchtext: '' })
	}

	render(){
		return (
			<form onSubmit={this.onFormSubmit} className="searchbar-form">
				<input
					className="searchbarField"
					type="text"
					placeholder="Search"
					value={this.state.searchtext}
					onChange = {this.onInputChange}
				/>
				<button className="submitSearchBtn" type="submit" >
					<SearchIcon width="20" fill="#ffffff"/>
				</button>
			</form>
		)
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);