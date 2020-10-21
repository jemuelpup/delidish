import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../../components/chart';



class Weather extends Component{

	constructor(props){
		super(props);

		this.state = {};
	}

	renderTableData(cityData){
		
		const city = cityData.city;
		const temperature = cityData.list.map(({main}) => main.temp);
		const pressure = cityData.list.map(({main}) => main.pressure);
		const humidity = cityData.list.map(({main}) => main.humidity);
		
		return (
			<tr key={city.id}>
				<td>{city.name}</td>
				<td>
					<Chart data={temperature} color={"blue"} unit={"K"}/>
				</td>
				<td>
					<Chart data={pressure} color={"red"} unit={"hPa"}/>
				</td>
				<td>
					<Chart data={humidity} color={"green"} unit={"%"}/>
				</td>
			</tr>
		);
	}

	render(){
		return (
			<div className="weather">
				<table>
					<thead>
						<tr>
							<th>City</th>
							<th>Temperature(K)</th>
							<th>Pressure(hPa)</th>
							<th>Humidity(%)</th>
						</tr>
					</thead>
					<tbody>
						{ this.props.weather.map(this.renderTableData) }
					</tbody>
				</table>
			</div>
		)
	}
}

function mapStateToProps({weather}){
	return { weather }
}

export default connect(mapStateToProps)(Weather)