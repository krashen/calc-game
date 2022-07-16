import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as helpers from '../helpers/index';

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
			} else {
				setFail(true);
			}	
		}	
	}
	useEffect(() => {

		document.getElementById("numberInputForm").reset();
		document.getElementById("numberInput").focus();

	},[currentEqual, subGameStarted, gameInitialized])
	
	//--- Avoid cursor moving back
	useEffect(() => {
		const inputElement = document.getElementById("numberInput");		
		inputElement.addEventListener('keyup', helpers.curryingCheckKey(inputElement, 37));
		inputElement.addEventListener('keydown', helpers.curryingCheckKey(inputElement, 37));
	}, [])

	//---------------

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