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
	const moveCursorToEnd = (el, l) => {
		el.type = 'text';
		el.setSelectionRange(l, l);
		el.type = 'number';
	}

	// Currying function to pass to addEventListener
	const curryingCheckKey = (i) => (e) => { if (e.keyCode === 37) moveCursorToEnd(i,i.value.length)}

	useEffect(() => {
		const inputElement = document.getElementById("numberInput");		
		inputElement.addEventListener('keyup', curryingCheckKey(inputElement));
		inputElement.addEventListener('keydown', curryingCheckKey(inputElement));
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