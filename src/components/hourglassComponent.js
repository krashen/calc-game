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
		setGame,
		setSubGame,
		setFail,
		updateTimer
	} = bindActionCreators(actionCreators, dispatch);

	const store = useSelector(store => store);

	const fail = store.fail;
	const gameInitialized = store.gameInitialized;
	const sublevel = store.sublevel;
	const level = store.level;
	const subGameStarted = store.subGameStarted;
	const timer = store.timer;
	const timeMultiplied = timer*config.TIMER_SPEED_FACTOR; 

	// keeps the timer running and resets if sublevel changed
	let resetPlease = false;
	
	// checks if sublevel changes to reset the timer
	useEffect(() => {
		resetPlease = true; 
	},[sublevel]);

	// use State hook to run the timer and gather score
	const [count, setCount] = useState(timeMultiplied);	
	const [score, setScore] = useState(0);
	
	useEffect(() => {

		if (gameInitialized) {

			let timeout = setTimeout(() => {
					// timer logic
					if( subGameStarted ){
						if (resetPlease) {
							setCount(() => timeMultiplied);
							setScore((score) => score + sublevel + ((count*100)/timeMultiplied * level));
							resetPlease = false;				
						}
						else if (fail) {
							setFail(false);
							setCount((count) => count - (timeMultiplied * (config.FAIL_PERCENTAGE/100)));
						}
						else if (count > 0) {	
							setCount((count) => count - 1)
						}
						else {
							// this stops the game, but doesn't reset, waiting for score to be pushed
							
							setCount(() => 0);
							setSubGame(false);
							clearTimeout(timeout);
							timeout = null;

							// resetting in callback passed to Score Adder
						}
					}
				}, 1000/config.TIMER_SPEED_FACTOR);
				return () => clearTimeout(timeout)
			}
		}
	);

	// callback to pass to Score Adder component
	const callbackAddScore = () => {
		setScore(() => 0);

		// + 1 to make it different and keep useEffect running
		setCount(() => config.INITIAL_TIMER * config.TIMER_SPEED_FACTOR + 1);

		// resets the game
		setGame(false);
		updateSublevel(true);
		updateLevel(true);
		updateTimer();
	}

	return (
		<div className="hourglass">
			<ProgressBar 
				now={count} 
				key={1} 
				max={timeMultiplied} 
			/>
			{ !subGameStarted && gameInitialized &&
				<ScoreAdder
					score={score} 
					callback={callbackAddScore}
				/>
			}
		</div>
	);
};

export default Hourglass
