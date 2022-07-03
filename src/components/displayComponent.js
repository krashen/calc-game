import React from 'react';
import { useSelector } from 'react-redux';

const Display = () => {
	const sumNumbers = useSelector(store => store.sumNumbers);
	return (
		<div className="display">
			<h2>{sumNumbers[0]}</h2>
			<h3>+</h3>
			<h2>{sumNumbers[1]}</h2>
		</div>
	);		
}

export default Display