import { React, useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from "redux";
import * as config from '../constants/config';
// Bootstrap
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';

// Unified action creators
import { actionCreators } from '../indexActionCreators';

const Hourglass = () => {
	const dispatch = useDispatch();
	const { 
		setGame,
		addScoreToRank,
		updateSublevel,
		updateLevel
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
	const gameStarted = store.gameStarted;
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
	
	useEffect(() => {

		let timeout = setTimeout(() => {
				// timer logic
				if(gameStarted){
					if (resetPlease) {
						setCount(() => timeMultiplied);
						setScore((score) => score + (count * level));
						resetPlease = false;				
					}
					else if (count > 0) {	
						setCount((count) => count - 1)	
					} else {
						// +1 to make it different and keep useEffect running
						setCount(() => timeMultiplied+1); 
						
						// clean timeout
						clearTimeout(timeout);
						timeout = null;

						// update store
						addScoreToRank(score);
						setScore(() => 0);
						updateSublevel(true);
						updateLevel(true);
						setGame(false);
					}
				}
			}, 1000/config.TIMER_SPEED_FACTOR);
			return () => clearTimeout(timeout)
		}
	);

	return (
		<div className={"hourglass " + sublevel} >
			<ProgressBar 
				variant={ count < barStatusChange ? "warning" : "success" } 
				now={count} 
				key={1} 
				max={timeMultiplied} 
			/>
		</div>
	);
};

export default Hourglass
