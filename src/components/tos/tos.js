import React, { Component } from 'react';
import styles from './tos.css'

export default class Tos extends Component {
	render() {
		return(
			<div className={styles.tos} >
			<h3 className={styles.tosTitle}>Terms Of Service</h3>
				<p className={styles.light}>You recognize by purchasing this product that it is meant for entertainment purposes only.  You acknowledge that the 
“Triple Holiness” technique is entirely fictitious and meant for entertainment purposes only.  Any purchase of this
product will in fact be interpreted as a donation for having been entertained.  Whether or not you receive anything
at all in return will be at the sole discretion of the owner of this site.  All returns and cancellations are subject to a 500% processing fee.</p>
			</div>
		);
	}
}