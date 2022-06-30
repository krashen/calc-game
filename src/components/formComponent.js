import React from 'react';
//import { useDispatch, useSelector } from 'react-redux';
//import { bindActionCreators} from 'redux';

// Unified action creators
//import { actionCreators } from '../indexActionCreators';

const Form = () => {
	//const store = useSelector(store => store);
	//console.log(store)
	//const dispatch = useDispatch();
	//const { updateCurrentEqual } = bindActionCreators(actionCreators, dispatch);

	const handleSubmit = e => {
		e.preventDefault();
		//updateCurrentEqual(e.target[0].value);
	
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