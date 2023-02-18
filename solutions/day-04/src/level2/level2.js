import React from "react";
import "./level2.css";
import Image from "../frontend_technologies.png";

const Banner = () => {
	return <img src={Image} alt="frontend_technologies" />;
};
const Design = () => {
	return (
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
	);
};
const Level2 = () => {
	return (
		<>
			<Banner />
			<Design />
		</>
	);
};
export default Level2;
