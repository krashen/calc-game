import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators} from 'redux';
// Unified action creators
import { actionCreators } from '../indexActionCreators';

const Form = () => {
	const dispatch = useDispatch();
	const { mipri } = bindActionCreators(actionCreators, dispatch);
	const handleSubmit = e => {
		e.preventDefault();
		mipri(e.target[0].value);
	
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