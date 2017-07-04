import React, { Component } from 'react';

export default class Spacer extends Component {
	render() {
	
	const spacer = {
		margin: "0.5rem 0 0.5rem 0",
		padding: "1rem 0 1rem 0",
	}

		return(
			<div style={spacer}></div>
		);
			
	}
}