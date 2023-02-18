import React from "react";

const Button = () => <button>Click me!</button>;

const InputField = () => <input type="text" />;

class AlertBox extends React.Component {
	render() {
		return (
			<div>
				<p>warning alert box, success alert box</p>
			</div>
		);
	}
}

const Level1 = () => {
	return (
		<>
			{Button}
			{InputField}
			{AlertBox}
		</>
	);
};

export default Level1;
