import * as actions from '../constants/actions';
import * as config from '../constants/config';

const timerReducer = (state = config.INITIAL_TIMER, action) => {
	switch (action.type) {
		case actions.UPDATE_TIMER:
			return action.payload;

		default:
			return state;
	}
}


export default timerReducer;