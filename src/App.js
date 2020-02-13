import React, { Component } from 'react';
import Box from './Box';
import './App.css';

class App extends Component {
	static defaultProps = {
		allColors: ['Aquamarine', 'LavenderBlush', 'LemonChiffon', 'DarkOliveGreen'],
	};
	render() {
		return (
			<div className="App">
				<Box />
			</div>
		);
	}
}

export default App;
