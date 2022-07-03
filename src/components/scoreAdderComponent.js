import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from "redux";
import PropTypes from 'prop-types';

// Unified action creators
import { actionCreators } from '../indexActionCreators';

const ScoreAdder = (props) => {
	const dispatch = useDispatch();
	const { 
		addScoreToRank,
	} = bindActionCreators(actionCreators, dispatch);

	const handleSubmit = e => {
		e.preventDefault();
		const res = e.target[0].value;
		e.target.reset();

		if (res.length != 0) {			
			addScoreToRank({
				score: props.score,
				name: res
			});
			props.callback();
		} else {
			console.log('Ponete un nombre porfa')	
		}	
	}

	return (
		<form 
			className="inputName"
			onSubmit={handleSubmit}
		>
			<input type="text" placeholder="nombre" />
			<button type="submit">Sipi</button>
		</form>
	);		
}

// Validates props
ScoreAdder.propTypes = {
  score: PropTypes.number,
  callback: PropTypes.func
}

export default ScoreAdder