import React, {Component} from 'react';
import SearchBar from '../containers/searchbar/searchbar';
import Weather from '../containers/weather/weather';
import WeatherTable from '../containers/weather/weather-table';

export default class App extends Component{
	render(){
		return (
			<div className="header">
				<SearchBar />
        <Weather />
				<WeatherTable />
			</div>
		)
	}
}