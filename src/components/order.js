import React, { Component } from 'react';
import { Flex, Item } from 'react-flex';
import 'react-flex/index.css';
import MediaQuery from 'react-responsive';

import HolyWater from './holyWater.js';
import Total from './total/total.js';


export default class Order extends Component {
	constructor(props) {
		super(props)
		this.state = {
			value: 1
		}
	}



	render() {
		return(
			<HolyWater />
			<Total value={this.state.value} onChange={this.updateInputValue.bind(this)}/>
		);
	}
}