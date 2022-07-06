import { React, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Display = () => {

	const store = useSelector(store => store);
	const fact = store.fact;
	const sumNumbers = store.sumNumbers;
	const fail = store.fail;
	const subGameStarted = store.subGameStarted;

	// Fail
	useEffect(() => {
		let timeout = setTimeout(() => {
			clearTimeout(timeout);
			timeout = null;
		}, 900)
	},[fail]);
	
	return (
		<div className="displayContainer">
			<div className={`display ${ subGameStarted ? '' : 'displayStopped'}`}>
				<div className="factContainer">
					<div className="factCenteredBox">
						{fact}
					</div>
				</div>
				<div className={`failLight ${ fail ? 'on' : ''}`} />
				<h2>{sumNumbers[0]}</h2>
				<h3>+</h3>
				<h2>{sumNumbers[1]}</h2>
			</div>
		</div>
	);		
}

export default Display