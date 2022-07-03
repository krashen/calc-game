import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
	let l = props.level
	console.log(l);
	return (
		<div className="lightsContainer">
			<div className={`light ${ l >= 7 ? "on" : "" }`} />
			<div className={`light ${ l >= 6 ? "on" : "" }`} />
			<div className={`light ${ l >= 5 ? "on" : "" }`} />
			<div className={`light ${ l >= 4 ? "on" : "" }`} />
			<div className={`light ${ l >= 3 ? "on" : "" }`} />
			<div className={`light ${ l >= 2 ? "on" : "" }`} />
		</div>
	);		
}


// Validates props
Display.propTypes = {
	level: PropTypes.number
}

export default Display