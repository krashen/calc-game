import { combineReducers } from "redux";
import levelReducer from "./levelReducer";
import sublevelReducer from "./sublevelReducer";
import rankReducer from "./rankReducer";
import currentEqualReducer from "./currentEqualReducer";
import sumNumbersReducer from "./sumNumbersReducer";
import gameInitializedReducer from "./gameStartedReducer";
import timerReducer from "./timerReducer";

const reducers = combineReducers({
		level: levelReducer,
		sublevel: sublevelReducer,
		rank: rankReducer,
		currentEqual: currentEqualReducer,
		sumNumbers: sumNumbersReducer,
		gameInitialized: gameInitializedReducer,
		timer: timerReducer
	})

export default reducers;