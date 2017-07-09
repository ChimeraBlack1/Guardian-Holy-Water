import React, { Component } from 'react'
import { Row, Col, Grid } from 'react-bootstrap'
import styles from './total.css'
import Finalize from '../finalize'

export default class Total extends Component {
	constructor(props){
		super(props);
		this.state = {
			inputValue: 1
		};

		console.log(this.state);
	}



  updateInputValue(evt) {
      this.setState({
       inputValue: evt.target.value,
       page: this.state.page
      });

      console.log(this.state);
  }



	render() {


	    const taxRate = {
				Ontario: 0.13
			}
			
		const price = 14.99;
		const subtotal = this.state.inputValue * price;
		const tax = subtotal * taxRate.Ontario;
		const total = (tax + subtotal);
		
		const order = {
			Qty: this.state.inputValue,
			subtotal: subtotal,
			tax: tax,
			total: total,
		}


		return(
			<Grid>
				<Row>
					<Col sm={2} ></Col>
						<Col xs={6} sm={4}>
							<span>Qty</span>
						</Col>
						<Col xs={6} sm={4}>
							<input type="number" min="1" className={styles.inputStyle} value={this.state.inputValue} onChange={this.updateInputValue.bind(this)}/>
						</Col>
					<Col sm={2} ></Col>
				</Row>

				<Row>
					<Col sm={2}></Col>
					<Col xs={6} sm={4}>
						<span>Price</span>
					</Col>
					<Col xs={6} sm={4}>
						${price}						
					</Col>
					<Col sm={2}></Col>
				</Row>

				<Row>
					<Col sm={2}></Col>
					<Col xs={6} sm={4}>
						<span>Subtotal</span>
					</Col>
					<Col xs={6} sm={4}>
						${subtotal.toFixed(2)}						
					</Col>
					<Col sm={2}></Col>
				</Row>

				<Row>
					<Col sm={2}></Col>
					<Col xs={6} sm={4}>
						<span>Tax</span>
					</Col>
					<Col xs={6} sm={4}>
						${tax.toFixed(2)}						
					</Col>
					<Col sm={2}></Col>
				</Row>

				<Row>
					<Col sm={2}></Col>
					<Col xs={6} sm={4}>
						<div className={styles.totalStyle}>
							<span>Total</span>
						</div>
					</Col>
					<Col xs={6} sm={4}>
						<div className={styles.totalStyle}>
							${total.toFixed(2)}
						</div>						
					</Col>
					<Col sm={2}></Col>
				</Row>

			</Grid>
		);
	}
}