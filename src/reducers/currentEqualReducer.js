import * as actions from '../constants/actions';

const currentEqualReducer = (state = 0, action) => {
	switch (action.type) {
		case actions.UPDATE_CURRENT_EQUAL:
			return action.payload;

		default:
			return state;
	}
}


export default currentEqualReducer;