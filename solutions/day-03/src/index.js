import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Level2 from "./level2/level2";
import Level3 from "./level3/level3";

const parent = (
	<>
		<div>
			<h1>Level 2</h1>
			<Level2 />
			<h1>Level 3</h1>
			<Level3 />
		</div>
	</>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
