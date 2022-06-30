import * as actions from '../constants/actions';

export const updateSumNumbers = (nums) => {
	return (dispatch) => {
		dispatch({
			type: actions.UPDATE_SUM_NUMBERS,
			payload: nums
		})
	}
}

export const updateCurrentEqual = (num) => {
	return (dispatch) => {
		dispatch({
			type: actions.UPDATE_CURRENT_EQUAL,
			payload: num
		})
	}
}

export const setGame = (b) => {
	if (b) {
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


// Reset game
export const resetSublevel = () => {
	return (dispatch) => {
		dispatch({
			type: actions.RESET_SUBLEVEL
		})
	}
}

export const resetLevel = () => {
	return (dispatch) => {
		dispatch({
			type: actions.LEVEL_RESET
		})
	}
}



