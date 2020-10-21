import React, {Component} from 'react';
import { Provider } from 'react-redux';
import Root from './Root';
import Store from './Store';
import Header from './Header/Header'
import Footer from './Footer/Footer';

import {
	BrowserRouter as Router,
} from "react-router-dom";

export default class App extends Component{
	
	constructor(props) {
		super(props);
		// Don't call this.setState() here!
		this.state = { counter: 0 };
	}
	
	render(){
		return (
			<Router>
				<Provider store={Store}>
					<Header />
					<Root />
					<Footer />
				</Provider>
			</Router>
		)
	}
}