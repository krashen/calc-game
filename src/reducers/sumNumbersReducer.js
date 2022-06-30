import * as actions from '../constants/actions';
import produce from "immer";

const sumNumbersReducer = (state = [0,0], action) => {
	switch (action.type) {
		case actions.UPDATE_SUM_NUMBERS:
			return produce(state, draft => {
				draft = [...action.payload];
				return draft
			})

		default:
			return state;
	}
}


export default sumNumbersReducer;