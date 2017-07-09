import React, { Component } from 'react';
import styles from '../App.css'

export default class Header extends Component {
	render() {
		return(
			<div className={styles.header}>
				<div className={styles.overlay}>
					<h1 className={styles.H1}>Guardian</h1>
					<h2 className={styles.H2}>Holy Water</h2>
				</div>
			</div>
		);
	}
}
