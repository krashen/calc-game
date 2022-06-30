import { combineReducers } from "redux";
import levelReducer from "./levelReducer";
import sublevelReducer from "./sublevelReducer";
import scoreReducer from "./scoreReducer";
import rankReducer from "./rankReducer";
import currentEqualReducer from "./currentEqualReducer";
import sumNumbersReducer from "./sumNumbersReducer";
import gameStartedReducer from "./gameStartedReducer";

const reducers = combineReducers({
		level: levelReducer,
		sublevel: sublevelReducer,
		score: scoreReducer,
		rank: rankReducer,
		currentEqual: currentEqualReducer,
		sumNumbers: sumNumbersReducer,
		gameStarted: gameStartedReducer
	})

export default reducers;