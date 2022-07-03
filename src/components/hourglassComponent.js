import { React, useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from "redux";
import * as config from '../constants/config';

// Bootstrap
import ProgressBar from 'react-bootstrap/ProgressBar';

// Unified action creators
import { actionCreators } from '../indexActionCreators';

// Components
import ScoreAdder from './scoreAdderComponent';

const Hourglass = () => {
	const dispatch = useDispatch();
	const { 
		updateSublevel,
		updateLevel,
		setGame
	} = bindActionCreators(actionCreators, dispatch);

	// timer in seconds
	const timer = useSelector(store => store.timer); 

	// multiplied by factor for timer speeding
	// you should use this one ahead
	const timeMultiplied = timer*config.TIMER_SPEED_FACTOR; 

	// at 25% bar changes color
	const barStatusChange = timeMultiplied / 4;

	// store stuff
	const store = useSelector(store => store);
	const gameInitialized = store.gameInitialized;
	const sublevel = store.sublevel;
	const level = store.level;
	
	// keeps the timer running and resets if sublevel changed
	let resetPlease = false;
	
	// checks if sublevel changes to reset the timer
	useEffect(() => {
		resetPlease = true; 
	},[sublevel]);

	// use State hook to run the timer and gather score
	const [count, setCount] = useState(timeMultiplied);	
	const [score, setScore] = useState(0);
	let [gameStopped, setGameStopped] = useState(false);

	useEffect(() => {

		if (gameInitialized) {

			let timeout = setTimeout(() => {

					// timer logic
					if( !gameStopped ){
						if (resetPlease) {
							setCount(() => timeMultiplied);
							setScore((score) => score + (count * level));
							resetPlease = false;				
						}
						else if (count > 0) {	
							setCount((count) => count - 1)	
						} else {
							// this stops the game, but doesn't reset, waiting for score to be pushed
							setGameStopped(() => true);

							// clean timeout
							clearTimeout(timeout);
							timeout = null;

							// restart store
							updateSublevel(true);
							updateLevel(true);

							// rest of resetting in callback passed to Score Adder
						}
					}
				}, 1000/config.TIMER_SPEED_FACTOR);
				return () => clearTimeout(timeout)
			}
		}
	);

	// function to pass to Score Adder to call at the end
	const callbackAddScore = () => {
		setScore(() => 0);
		// + 1 to make it different and keep useEffect running
		setCount(() => timeMultiplied + 1);

		// makes sure game isn't stopped
		setGameStopped(() => false);

		// reset the game
		setGame(false);
	}

	return (
		<div className={"hourglass " + sublevel} >
			<ProgressBar 
				variant={ count < barStatusChange ? "warning" : "success" } 
				now={count} 
				key={1} 
				max={timeMultiplied} 
			/>
			{ gameStopped && 
				<ScoreAdder
					score={score} 
					callback={callbackAddScore}
				/>
			}
		</div>
	);
};

export default Hourglass
