import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
	return (
		<div className="display">
			<h1>{props.currentSum}</h1>
		</div>
	);		
}


// Validates props
Display.propTypes = {
  currentSum: PropTypes.string
}

export default Display