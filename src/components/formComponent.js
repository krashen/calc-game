import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators} from 'redux';

// Unified action creators
import { actionCreators } from '../indexActionCreators';

const Form = () => {
	const currentEqual = useSelector(store => store.currentEqual);	
	const dispatch = useDispatch();
	const { 
		updateSublevel,
		updateLevel,
		updateSumNumbers,
		updateCurrentEqual
		} = bindActionCreators(actionCreators, dispatch);

	const handleSubmit = e => {
		e.preventDefault();
		const res = e.target[0].value;
		e.target.reset();

		if (res == currentEqual) {
			updateLevel();
			updateSublevel();
			updateSumNumbers();
			updateCurrentEqual();
		} else {
			console.log('No')
		}
	
	}
	return (
		<form 
			className="form-class"
			onSubmit={handleSubmit}
		>
			<input type="number" />
			<button type="submit" />
		</form>
	);
};

export default Form