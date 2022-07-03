import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators} from 'redux';

// Unified action creators
import { actionCreators } from '../indexActionCreators';

const StartButton = () => {
	const gameInitialized = useSelector(store => store.gameInitialized);
	const dispatch = useDispatch();
	const { updateSumNumbers,
			updateCurrentEqual,
			updateSublevel,
			updateLevel,
			setGame,
			setSubGame
		} = bindActionCreators(actionCreators, dispatch);

	const handleClick = e => {
		e.preventDefault();
	
		updateSumNumbers();
		updateCurrentEqual();
		updateSublevel(true);
		updateLevel(true);
		setGame(true);
		setSubGame(true);
	}	
	return (
		<div className={`startButton ${gameInitialized ? "startDisabled" : "startEnabled" }`}>
			<button
				onClick={handleClick} 
				type="submit"
				disabled={gameInitialized}
			/>
		</div>
	);
};

export default StartButton