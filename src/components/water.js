import React, { Component } from 'react';
import HolyWater from './holyWater.js';

export default class Water extends Component {
	render () {
		

		return(
			<div className="container">
				<p>Our water is the best water for getting rid of demons and evil spirits.  This water is blessed using our “Triple Holiness” blessing technique (patent pending).</p>
				<HolyWater />
				<h3 className="H3">The "Triple Holiness" technique.</h3>
				<p className="light">The water comes from a spring high in the andes mountains.  It is harvested by a blind priest who brings it down to his village where it sits in a barrel
Inside a church for 10 years.  From there it is shipped to Israel where it is blessed by a deaf priest.  Once he has blessed the water it is then shipped
to the Vatican to be blessed by the Pope.  At this stage the tears of a virgin alter boy are added and it is shipped here to Canada for one final blessing.
Once it is in our Canadian warehouse, our very own mute Priest places the final blessing upon the barrel.  We know it’s ready when it gives off a glow
that you can only see if you look very closely and believe in the power of almighty god.</p>
				<h3 className="easy">Easy to Use</h3>
				<ul>
					<li>Step 1: Open the bottle.</li>
					<li>Step 2: Sprinkle around your house wherever evil spirits may lurk (especially closets and basements).</li>
					<li>Step 3: Drink some.  To make sure you don’t have any evil spirits hiding inside you, drink a little. 
You will instantly feel the power of the lord cleansing you.  This doesn’t mean evil spirits or demons were
inside you, it’s just how powerful the lord’s touch feels.</li>
				</ul>
			</div>
		);
	}
}