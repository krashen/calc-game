import * as actions from '../constants/actions';

const rankReducer = (state = [], action) => {
	switch (action.type) {
		case actions.ADD_SCORE: {
			const newState = [...state];

			newState.push(action.payload);
			newState.sort((a,b) => b.score - a.score);

			return newState.slice(0,10);
		}
		default:
			return state;
	}
}


export default rankReducer;