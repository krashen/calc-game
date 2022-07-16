import { React, useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from "redux";
import * as config from '../constants/config';
import * as helpers from '../helpers/index';

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
		updateFact
	} = bindActionCreators(actionCreators, dispatch);

	const store = useSelector(store => store);

	const fail = store.fail;
	const gameInitialized = store.gameInitialized;
	const sublevel = store.sublevel;
	const level = store.level;
	const subGameStarted = store.subGameStarted;
	const timePerLevel = config.SECONDS_BY_LEVEL * config.TIMER_SPEED_FACTOR; // also INITIAL TIME
	
	const [score, setScore] = useState(0);
	const [time, setTime] = useState(timePerLevel);
	const [resetCount, setResetCount] = useState(false);
	const [count, setCount] = useState(time);

	// InitAux makes sure ResetCount is not true on mounting
	const [initAux, setInitAux] = useState(true);

	// initSwitch makes sure useEffect() is executed at the beggining
	const [initSwitch, setInitSwitch] = useState(true);	

	useEffect(() => {
		if (!initAux){
			setResetCount(() => true);
			setTime(() => helpers.recursiveIncrease(timePerLevel, level, config.ADDED_TIME_MULTIPLIER));	
		}
		setInitAux(() => false)
		
	},[sublevel, initSwitch]);
	
	useEffect(() => {

		if (gameInitialized) {
			let timeout = setTimeout(() => {
					if( subGameStarted ){
						if (resetCount) {
							setCount(() => time);
							setScore((score) => score + sublevel + (((count*100)/time) * level));
							setResetCount(() => false);				
						}
						else if (fail) {
							setFail(false);
							setCount((count) => count - (time * (config.FAIL_PERCENTAGE/100)));
						}
						else if (count > 0) {	
							setCount((count) => count - 1)
						}
						else {
							// this stops the game, but doesn't reset, waits for score to be pushed
							// - resetting in callback passed to Score Adder
							updateFact(false);
							setCount(() => 0);
							setSubGame(false);
							setTime(() => 0);
							clearTimeout(timeout);
							timeout = null;			
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
		setTime(() => timePerLevel);
		setCount(() => timePerLevel + 1);
		setInitAux(() => true);
		setInitSwitch(() => !initSwitch);

		// resets the game
		updateSublevel(true);
		setGame(false); // this set is an action, not a Hook setter
		updateLevel(true);
	}

	return (
		<div className="hourglass">
			<ProgressBar 
				now={count} 
				key={1} 
				max={time} 
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
