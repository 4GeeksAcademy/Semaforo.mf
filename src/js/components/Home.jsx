import React, { useState } from "react";
import "../../styles/index.css";

function Home() {
	const [color, setColor] = useState("red");
	const [showPurple, setShowPurple] = useState(false);

	let colors;
	if (showPurple === true) {
		colors = ["red", "yellow", "green", "purple"];
	} else {
		colors = ["red", "yellow", "green"];
	}

	const changeColor = () => {
		if (color === "red") {
			setColor("yellow");
		} else if (color === "yellow") {
			setColor("green");
		} else {
			setColor("red");
		}
	};

	const togglePurple = () => {
		if (showPurple === true) {
			setShowPurple(false);
			if (color === "purple") {
				setColor("red");
			}
		} else {
			setShowPurple(true);
		}
	};

	return (
		<div className="container">
			<div className="pole"></div>
			<div className="traffic-light">
				<div className={color === "red" ? "light red glow" : "light red"} onClick={() => setColor("red")}></div>
				<div className={color === "yellow" ? "light yellow glow" : "light yellow"} onClick={() => setColor("yellow")}></div>
				<div className={color === "green" ? "light green glow" : "light green"} onClick={() => setColor("green")}></div>
				{showPurple ? (<div className={color === "purple" ? "light purple glow" : "light purple"} onClick={() => setColor("purple")}></div>): null}</div>
			<button onClick={changeColor} className="btn">Cambiar color</button>
			<button onClick={togglePurple} className="btn"> {showPurple ? "Quitar" : "Añadir"}</button></div>
	);
}; 

	export default Home;