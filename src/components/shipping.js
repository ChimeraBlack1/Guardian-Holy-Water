import React, { Component } from 'react';

export default class Shipping extends Component {

	constructor (props) {
		super(props);
		this.state = {
			name: "First Name",
			value: "",
		};
	}

	handleFocus (e) {
		this.setState({name: ""});
	}

	handleChange (e) {
		this.setState({value: e.target.value});
	}

	handleBlur () {

		if(this.state.value === "") {
			this.setState({
				name: "First Name"
			});
		}
	}


	render() {

		const inputStyle = {
			borderTop: "0",
			borderRight: "0",
			borderLeft: "0",
			borderBottom: "2px solid #333",
			textAlign: "left",
			fontFamily: "Open Sans, sans-serif",
  			margin: "0",
  			display: "block"
		}

		const labelStyle = {
			position: "absolute",
			top: "0",
			left: "0",
		}

		const spanStyle = {
			position: "absolute",
			textAlign: "left",
			top: "0",
			left: "0",
			zIndex: "1",
			width: "10rem",

		}

		const formStyle = {
			display: "inline-block",
			position: "relative",
			backgroundColor: "red",
		}

		const container = {
			float: "left",
		}

		const name = "first-name";

		return (
			<div style={container}>
				<div style={formStyle}>
					<label style={labelStyle}>
						<span style={spanStyle}>{this.state.name}</span>
						<input style={inputStyle} onFocus={this.handleFocus.bind(this)} onBlur={this.handleBlur.bind(this)} name={name} onChange={this.handleChange.bind(this)} value={this.state.value} type="text" />
					</label>
				</div>
			</div>
		);
	}
}