import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Level2 from "./level2/level2";

const parent = (
	<>
		<div>
			<h1>Level 2</h1>
			<Level2 />
		</div>
	</>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
