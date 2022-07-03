import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators} from 'redux';

// Unified action creators
import { actionCreators } from '../indexActionCreators';

const Form = () => {
	const store = useSelector(store => store);
	const currentEqual = store.currentEqual;
	const gameInitialized = store.gameInitialized;
	const subGameStarted = store.subGameStarted;	
	const dispatch = useDispatch();
	const { 
		updateSublevel,
		updateLevel,
		updateSumNumbers,
		updateCurrentEqual,
		updateTimer,
		setFail
		} = bindActionCreators(actionCreators, dispatch);

	const handleSubmit = e => {
		e.preventDefault();
		const res = e.target[0].value;
		e.target.reset();

		if (res.length != 0) {
			if (res == currentEqual) {
				updateLevel();
				updateSublevel();
				updateSumNumbers();
				updateCurrentEqual();
				updateTimer();
			} else {
				setFail(true);
			}	
		}	
	}

	useEffect(() => {
		document.getElementById("numberInputForm").reset();
		document.getElementById("numberInput").focus();
	},[currentEqual, subGameStarted, gameInitialized])

	return (
		<form 
			className="inputResult"
			onSubmit={handleSubmit}
			id="numberInputForm"
		>
			<input
				id="numberInput"
				type="number"
				disabled={!gameInitialized || !subGameStarted}
			/>
			<button type="submit" />
		</form>
	);
};

export default Form