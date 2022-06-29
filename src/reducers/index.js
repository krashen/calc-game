import { combineReducers } from "redux";
import levelReducer from "./levelReducer";
import sublevelReducer from "./sublevelReducer";
import scoreReducer from "./scoreReducer";
import rankReducer from "./rankReducer";
import currentEqualReducer from "./currentEqualReducer";

const reducers = combineReducers({
		level: levelReducer,
		sublevel: sublevelReducer,
		score: scoreReducer,
		rank: rankReducer,
		currentEqual: currentEqualReducer,
	})

export default reducers;