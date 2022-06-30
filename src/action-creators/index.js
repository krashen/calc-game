import * as actions from '../constants/actions';

export const startGame = (i) => {
	return (dispatch) => {
		dispatch({
			type: actions.INCREASE_SCORE,
			payload: i
		})
	}
}

