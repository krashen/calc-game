import React from "react";
import { useSelector } from "react-redux";

const Display = () => {
	const current = useSelector((state) => state.current);
	return (
		<div className="display">
			<h1>{current}</h1>
		</div>
	);
};

export default Display