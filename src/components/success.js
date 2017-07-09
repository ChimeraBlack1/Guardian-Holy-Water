import React, { Component } from 'react'

export default class OrderSuccess extends Component {
	render() {
		const orderNumber = Math.random() * (100000 - 20000) + 10000;

		return(
			<div>
				<h1>Your order was successful!</h1>
				<h2>Your order number is {orderNumber.toFixed(0)}</h2>
			</div>
		);
	}
}