import * as actions from '../constants/actions';

const gameStartedReducer = (state = false, action) => {
	switch (action.type) {
		case actions.START_GAME:			
			return true;

		case actions.STOP_GAME:			
			return false;

		default:
			return state;
	}
}

export default gameStartedReducer;