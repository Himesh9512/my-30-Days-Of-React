import React from "react";
import Level2 from "./level2/level2";
import Level3 from "./level3/level3";

class App extends React.Component {
	render() {
		return (
			<>
				<h1>Level 2</h1>
				<Level2 />
				<h1>Level 3</h1>
				<Level3 />
			</>
		);
	}
}

export default App;
