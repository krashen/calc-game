import * as actions from '../constants/actions';

const gameInitializedReducer = (state = false, action) => {
	switch (action.type) {
		case actions.INIT_GAME:			
			return true;

		case actions.STOP_GAME:			
			return false;

		default:
			return state;
	}
}

export default gameInitializedReducer;