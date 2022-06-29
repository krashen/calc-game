import * as actions from '../constants/actions';

const levelReducer = (state = 0, action) => {
	switch (action.type) {
		case actions.LEVEL_UP:
			return state ++;
		default:
			return state;
	}
}


export default levelReducer;