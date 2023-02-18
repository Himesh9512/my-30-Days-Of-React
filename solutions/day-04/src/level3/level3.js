import React from "react";
import Avatar from "../asabeneh.jpg";
import "./level3.css";

const hexColor = () => {
	let str = "0123456789abcdef";
	let color = "";
	for (let i = 0; i < 6; i++) {
		let index = Math.floor(Math.random() * str.length);
		color += str[index];
	}
	return "#" + color;
};

const RandomColors = () => {
	let colors = [];
	for (let i = 0; i < 5; i++) {
		colors.push(hexColor());
	}
	return (
		<ul className="color-card">
			{colors.map((color) => {
				return (
					<li style={{ backgroundColor: color }} key={color} className="color-bar">
						{color}
					</li>
				);
			})}
		</ul>
	);
};

const UserCard = () => {
	return (
		<div className="user-card">
			<img src={Avatar} alt="profile-avatar" className="avatar" />
			<h3>
				ASABENEH YETAYEH<span className="material-icons">verified</span>
			</h3>
			<small>Senior Developer,Finland</small>
			<b>SKILLS</b>
			<ul>
				<li>HTML</li>
				<li>CSS</li>
				<li>Sass</li>
				<li>JS</li>
				<li>React</li>
				<li>Redux</li>
				<li>Node</li>
				<li>MongoDB</li>
				<li>Python</li>
				<li>Flask</li>
				<li>Django</li>
				<li>NumPy</li>
				<li>Pandas</li>
				<li>Data Analysis</li>
				<li>MySQL</li>
				<li>GraphQL</li>
				<li>Gatsby</li>
				<li>Docker</li>
				<li>Heroku</li>
				<li>Git</li>
			</ul>
			<small>
				<span className="material-icons">schedule</span>Joined on Aug 30,2020
			</small>
		</div>
	);
};
const Level3 = () => {
	return (
		<>
			<RandomColors />
			<UserCard />
		</>
	);
};

export default Level3;
