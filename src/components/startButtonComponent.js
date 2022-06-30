import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as helpers from '../helpers/index';

// Unified action creators
import { actionCreators } from '../indexActionCreators';

const StartButton = () => {
	const store = useSelector(store => store);	
	const dispatch = useDispatch();
	const sumPair = helpers.generatePair(store.level);	
	const { updateSumNumbers,
			updateCurrentEqual,
			resetSublevel,
			resetLevel,
			setGame 
		} = bindActionCreators(actionCreators, dispatch);

	const handleSubmit = e => {
		e.preventDefault();
		updateCurrentEqual(sumPair.reduce((a,b) => a+b));
		updateSumNumbers(sumPair);
		resetSublevel();
		resetLevel();
		setGame(true);
		console.log(store);
	}
	return (
		<form 
			className="form-class"
			onSubmit={handleSubmit}
		>
			<button type="submit">Start</button>
		</form>
	);
};

export default StartButton