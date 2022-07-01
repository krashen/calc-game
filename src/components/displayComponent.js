import React from 'react';
import { useSelector } from 'react-redux';
//import PropTypes from 'prop-types';

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


// Validates props
//Display.propTypes = {
//  val1: PropTypes.number,
//  val2: PropTypes.number
//}

export default Display