import React from "react";
import { useSelector } from "react-redux";

const Display = () => {

	const current = useSelector(state => state.current);

	return (
		<div className="display">
			<h2>{current}</h2>
		</div>
	);
};

export default Display