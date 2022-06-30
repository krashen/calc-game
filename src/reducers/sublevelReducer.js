import * as actions from '../constants/actions';


const sublevelReducer = (state = 1, action) => {
	switch (action.type) {

		case actions.RESET_SUBLEVEL:
			return 1
		
		case actions.UPDATE_SUBLEVEL:
			return state + 1;

		default:
			return state;
	}
}


export default sublevelReducer;