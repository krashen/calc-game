import * as actions from '../constants/actions';

export const mipri = (i) => {
	return (dispatch) => {
		dispatch({
			type: actions.INCREASE_SCORE,
			payload: i
		})
	}
}

export const noda = (i) => {
	return (dispatch) => {
		dispatch({
			type: actions.INCREASE_SCORE,
			payload: i
		})
	}
}