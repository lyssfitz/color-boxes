import React, { Component } from 'react';

class Box extends Component {
	constructor(props) {
		super(props);
		this.state = { color: 'turquoise' };
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {}

	render() {
		return <div className="Box" style={{ backgroundColor: this.state.color }} onClick={this.handleClick}></div>;
	}
}
export default Box;
