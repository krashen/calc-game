import React from "react";
import { useSelector } from "react-redux";

const Display = () => {
	const level = useSelector((state) => state.level);

	return (
		<div className="display">
			<h1>{level}</h1>
		</div>
	);
};

export default Display