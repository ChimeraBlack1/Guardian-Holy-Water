import React, { Component } from 'react';


export default class Qty extends Component {
	constructor(props) {
      super(props);
      this.state = {inputValue: 1};
    }

    updateInputValue(evt) {
    	this.setState({
    		inputValue: evt.target.value
    	});
    }

	render() {

		const listStyles = {
			listStyle: "none",
			display: "inline-block",
			textAlign: "center",
			fontWeight: "800",
		}

		const inputStyle = {
			margin: "0 0 0 5rem",
		}

		const taxRate = {
			Ontario: 0.13
		}
		
		const price = 14.99;
		const subtotal = this.state.inputValue * price;
		const tax = subtotal * taxRate.Ontario;
		const total = (tax + subtotal);

		return(
			<ul style={listStyles}>
				<li>Qty <input style={inputStyle} hint="Input 1" value={this.state.inputValue} onChange={this.updateInputValue.bind(this)}/> </li>
				<li>Price ${price}</li>
				<li>Subtotal ${subtotal.toFixed(2)}</li>
				<li>Tax ${tax.toFixed(2)}</li>
				<li>Total ${total.toFixed(2)}</li>
			</ul>
		);
	}
}
