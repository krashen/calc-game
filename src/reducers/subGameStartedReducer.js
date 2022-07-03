import * as actions from '../constants/actions';

const subGameStartedReducer = (state = false, action) => {
	switch (action.type) {
		case actions.START_SUB_GAME:			
			return true;

		case actions.STOP_SUB_GAME:			
			return false;

		default:
			return state;
	}
}

export default subGameStartedReducer;