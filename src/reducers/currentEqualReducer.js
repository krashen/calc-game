import * as actions from '../constants/actions';

const currentEqualReducer = (state = 0, action) => {
	switch (action.type) {
		case actions.UPDATE_CURRENT_EQUAL:
			state = action.payload;
			return state;

		default:
			return state;
	}
}


export default currentEqualReducer;