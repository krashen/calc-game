import * as actions from '../constants/actions';
import * as config from '../constants/config';
import * as helpers from '../helpers/index';


export const updateSumNumbers = () => {

	return (dispatch, getState) => {
		const sumNumbers = helpers.generatePair(getState().level);
		dispatch({
			type: actions.UPDATE_SUM_NUMBERS,
			payload: sumNumbers
		})
	}

}

export const updateCurrentEqual = () => {

	return (dispatch, getState) => {
		dispatch({
			type: actions.UPDATE_CURRENT_EQUAL,
			payload: getState().sumNumbers.reduce((a,b) => a + b)
		})
	}

}

export const updateSublevel = (reset = false) => {	

	return (dispatch, getState) => {
		if (reset || getState().sublevel == config.SUBLEVEL_LENGTH) {
			dispatch({
				type: actions.RESET_SUBLEVEL
			})
		} else {
			dispatch({
				type: actions.UPDATE_SUBLEVEL
			})	
		}		
	}	

}

export const updateTimer = () => {	

	return (dispatch, getState) => {
		const level = getState().level		
		dispatch({
			type: actions.UPDATE_TIMER,
			payload: level * config.TIMER_INCREASE_FACTOR
		})		
	}

}

export const updateLevel = (reset = false) => {
	
	return (dispatch, getState) => {
		if (reset) {
			dispatch({
				type: actions.LEVEL_RESET
			})
		} else if (getState().sublevel == config.SUBLEVEL_LENGTH) {
			dispatch({
				type: actions.LEVEL_UP
			})
		} else {
			dispatch({
				type: actions.DO_NOTHING
			})
		}	
	}		
}


export const setGame = (start) => {

	if (start) {
		return (dispatch) => {
			dispatch({
				type: actions.START_GAME
			})
		}	
	}
	return (dispatch) => {
		dispatch({
			type: actions.STOP_GAME
		})
	}			
}

export const addScoreToRank = (score) => {	

	return (dispatch) => {		
		dispatch({
			type: actions.ADD_SCORE,
			payload: score
		})			
	}	
}

export const resetScore = () => {

	return (dispatch) => {
		dispatch({
			type: actions.RESET_SCORE
		})
	}
}


