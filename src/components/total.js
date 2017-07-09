import React, { Component } from 'react'
import { Row, Col, Grid } from 'react-bootstrap'

export default class Total extends Component {
	constructor(props) {
		super(props);
		this.state = {inputValue: 1}
	}


    updateInputValue(evt) {
    	this.setState({
    		inputValue: evt.target.value
    	});
    }


	render() {


	    const taxRate = {
				Ontario: 0.13
			}
			
		const price = 14.99;
		const subtotal = this.state.inputValue * price;
		const tax = subtotal * taxRate.Ontario;
		const total = (tax + subtotal);
		const inputStyle = {
			borderTop: "0",
			borderRight: "1px solid #eee",
			borderLeft: "0",
			borderBottom: "2px solid #555",
			textAlign: "center",
			fontFamily: "Open Sans, sans-serif",
  			display: "block",
  			outline: "0",
  			width: "50%",
  			margin: "2rem auto",
  			height: "2rem",
  			minWidth: "100px",
		}
		

		const totalStyle = {
			margin: "2rem 0",
			fontWeight: "800",
			fontSize: "1.5rem",
		}

		return(
			<Grid>
				<Row>
					<Col xs={6} md={6}>
						<span>Qty</span>
					</Col>
					<Col xs={6} md={6}>
						<input style={inputStyle} hint="Input 1" value={this.state.inputValue} onChange={this.updateInputValue.bind(this)}/>
					</Col>
				</Row>

				<Row>
					<Col xs={6} md={6}>
						<span>Price</span>
					</Col>
					<Col xs={6} md={6}>
						${price}						
					</Col>
				</Row>

				<Row>
					<Col xs={6} md={6}>
						<span>Subtotal</span>
					</Col>
					<Col xs={6} md={6}>
						${subtotal.toFixed(2)}						
					</Col>
				</Row>

				<Row>
					<Col xs={6} md={6}>
						<span>Tax</span>
					</Col>
					<Col xs={6} md={6}>
						${tax.toFixed(2)}						
					</Col>
				</Row>

				<Row>
					<Col xs={6} md={6}>
						<div style={totalStyle}>
							<span>Total</span>
						</div>
					</Col>
					<Col xs={6} md={6}>
						<div style={totalStyle}>
							${total.toFixed(2)}
						</div>						
					</Col>
				</Row>

			</Grid>
		);
	}
}