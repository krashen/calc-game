import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators} from 'redux';

// Unified action creators
import { actionCreators } from '../indexActionCreators';

const Form = () => {
	const dispatch = useDispatch();
	const { startGame } = bindActionCreators(actionCreators, dispatch);
	const handleSubmit = e => {
		e.preventDefault();
		startGame();
	
	}
	return (
		<form 
			className="form-class"
			onSubmit={handleSubmit}
		>
			<button type="submit" />
		</form>
	);
};

export default Form