import * as actions from '../constants/actions';

const sublevelReducer = (state = 1, action) => {
	switch (action.type) {
		case actions.UPDATE_SUBLEVEL:
			state = action.payload;
			return state;

		default:
			return state;
	}
}


export default sublevelReducer;