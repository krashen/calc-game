import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from "redux";
import PropTypes from 'prop-types';

// Unified action creators
import { actionCreators } from '../indexActionCreators';

const ScoreAdder = (props) => {
	const dispatch = useDispatch();
	const { 
		addScoreToRank,
		updateFact
	} = bindActionCreators(actionCreators, dispatch);
	const store = useSelector(store => store);
	const [nameSent, setNameSent] = useState(true);
	const handleSubmit = e => {
		e.preventDefault();
		const res = e.target[0].value;
		e.target.reset();

		if (res.length != 0) {			
			addScoreToRank({
				score: Math.round(props.score),
				name: res
			});
			// restarts the game
			props.callback();
		} else {
			setNameSent(() => false);
		}	
	}

	// if 0 points restarts the game
	useEffect(() => {
		if (props.score == 0){
			props.callback();
		} else {
			updateFact();	
		}	
		document.getElementById("addScoreInput").focus();	
	},[store.subGameStarted]);
	

	return (
		<div className={`inputName ${ nameSent ? '' : 'noName'}`}>
			<div className="inputNameAbs">
					<div className="totalScore">{Math.round(props.score)}</div>
					<form onSubmit={handleSubmit}>
						<input type="text" id="addScoreInput" placeholder="Your name" />
						<button type="submit" />
					</form>
				</div>
		</div>
	);		
}

// Validates props
ScoreAdder.propTypes = {
  score: PropTypes.number,
  callback: PropTypes.func
}

export default ScoreAdder