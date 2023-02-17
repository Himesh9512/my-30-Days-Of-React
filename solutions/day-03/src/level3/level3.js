import React from "react";
import "./level3.css";
import Avatar from "../asabeneh.jpg";

class Level3 extends React.Component {
	render() {
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
	}
}

export default Level3;
