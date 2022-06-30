import * as actions from '../constants/actions';
import * as config from '../constants/config';

const levelReducer = (state = config.INITIAL_LEVEL, action) => {
	switch (action.type) {
		case actions.LEVEL_UP:
			return state++;
		default:
			return state;
	}
}


export default levelReducer;