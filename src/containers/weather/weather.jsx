import React, {Component} from 'react';

export default class Weather extends Component{

	constructor(props){
		super(props);

		this.state = {
			searchtext: '',
		}
	}

	render(){
		return (
			<div className="weather">
				this contains the weather
			</div>
		)
	}
}