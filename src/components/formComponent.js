import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators} from 'redux';

// Unified action creators
import { actionCreators } from '../indexActionCreators';

// Components
import NumPad from 'react-numpad';

const Form = () => {
	const currentEqual = useSelector(store => store.currentEqual);	
	const dispatch = useDispatch();
	const { 
		updateSublevel,
		updateLevel,
		updateSumNumbers,
		updateCurrentEqual,
		updateTimer
		} = bindActionCreators(actionCreators, dispatch);
	const [num, setNum] = useState(0);

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
				console.log('No')
			}	
		}	
	}

	const handleChange = e => {
		setNum(() => e);
	}

	return (
		<form 
			className="inputResult"
			onSubmit={handleSubmit}
		>
			<input
				type="number"
				value={num}
			/>
			<button
				className="inputButton"
				type="submit"
			/>
			<NumPad.Number
				posiiton="center"
				onChange={handleChange}
				inline={true}
			/>
		</form>

	);
};

export default Form