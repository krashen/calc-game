import * as actions from '../constants/actions';

const failReducer = (state = false, action) => {
	switch (action.type) {
		case actions.FAIL_TRUE:			
			return true;

		case actions.FAIL_FALSE:			
			return false;

		default:
			return state;
	}
}

export default failReducer;