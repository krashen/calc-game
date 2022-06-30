import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators} from 'redux';

// Unified action creators
import { actionCreators } from '../indexActionCreators';

const StartButton = () => {
	const dispatch = useDispatch();
	const { updateSumNumbers,
			updateCurrentEqual,
			updateSublevel,
			updateLevel,
			setGame 
		} = bindActionCreators(actionCreators, dispatch);

	const handleSubmit = e => {
		e.preventDefault();
	
		updateSumNumbers();
		updateCurrentEqual();
		updateSublevel(true);
		updateLevel(true);
		setGame(true);
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