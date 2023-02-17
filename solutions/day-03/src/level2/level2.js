import React from "react";
import "./level2.css";
import Image from "../frontend_technologies.png";

class Level2 extends React.Component {
	render() {
		return (
			<>
				<img src={Image} alt="frontend_technologies" />
				<div className="container">
					<h1>SUBSCRIBE</h1>
					<p>Sign up with your email address to receive news and updates.</p>
					<ul>
						<li>
							<input type="text" placeholder="First name" />
						</li>
						<li>
							<input type="text" placeholder="Last name" />
						</li>
						<li>
							<input type="text" placeholder="Email" />
						</li>
					</ul>
					<button type="submit">subscribe</button>
				</div>
			</>
		);
	}
}

export default Level2;
