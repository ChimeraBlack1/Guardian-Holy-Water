import React, { Component } from 'react';

export default class Input extends Component {

	constructor (props) {
		super(props);
		this.state = {
			name: this.props.name,
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
				name: this.props.name,
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
		}

		const container = {

		}


		return (
			<div style={container}>
				<div style={formStyle}>
					<label style={labelStyle}>
						<span style={spanStyle}>{this.state.name}</span>
						<input style={inputStyle} onFocus={this.handleFocus.bind(this)} onBlur={this.handleBlur.bind(this)} name={this.props.name} onChange={this.handleChange.bind(this)} value={this.state.value} type="text" />
					</label>
				</div>
			</div>
		);
	}
}