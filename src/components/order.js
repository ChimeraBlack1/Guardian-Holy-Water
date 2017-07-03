import React, { Component } from 'react';
import { Flex, Item } from 'react-flex';
import 'react-flex/index.css';
import MediaQuery from 'react-responsive';

import HolyWater from './holyWater.js';
import Qty from './qty.js';


export default class Order extends Component {
	render() {
		return(
			<div>
				<MediaQuery query='(min-width: 992px)'>
					<Flex row alignItems="center">
						<Item flex={1}><HolyWater /></Item>
						<Item flex={1}><Qty /></Item>
					</Flex>
				</MediaQuery>

				<MediaQuery query='(max-width: 992px)'>
					<Flex column alignItems="center">
						<HolyWater />
						<Item row flex={1}><Qty /></Item>
					</Flex>
				</MediaQuery>
			</div>

		);
	}
}