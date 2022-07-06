import * as actions from '../constants/actions';

const factReducer = (state = '', action) => {
	switch (action.type) {
		case actions.UPDATE_FACT:
			return action.payload;

		case actions.EMPTY_FACT:
			return '';

		default:
			return state;
	}
}

export default factReducer;