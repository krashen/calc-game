import * as actions from '../constants/actions';
import produce from "immer";

const rankReducer = (state = [], action) => {
	switch (action.type) {
		case actions.ADD_SCORE:
			return produce(state, draft => {
				draft.push(action.payload)
			})
		default:
			return state;
	}
}


export default rankReducer;