import { combineReducers } from "redux";
import levelReducer from "./levelReducer";
import scoreReducer from "./scoreReducer";
import rankReducer from "./rankReducer";

const reducers = combineReducers({
		level: levelReducer,
		score: scoreReducer,
		rank: rankReducer
	})

export default reducers;