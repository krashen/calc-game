import * as actions from '../constants/actions';

const scoreReducer = (state = 0, action) => {
	switch (action.type) {
		case actions.INCREASE_SCORE:
			return state + action.payload;
		case actions.RESET:
			return state = 0;
		default:
			return state;
	}
}


export default scoreReducer;