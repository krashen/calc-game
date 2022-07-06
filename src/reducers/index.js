import { combineReducers } from "redux";
import levelReducer from "./levelReducer";
import sublevelReducer from "./sublevelReducer";
import rankReducer from "./rankReducer";
import currentEqualReducer from "./currentEqualReducer";
import sumNumbersReducer from "./sumNumbersReducer";
import gameInitializedReducer from "./gameInitializedReducer";
import subGameStartedReducer from "./subGameStartedReducer";
import failReducer from "./failReducer";
import factReducer from "./factReducer";

const reducers = combineReducers({
		level: levelReducer,
		sublevel: sublevelReducer,
		rank: rankReducer,
		currentEqual: currentEqualReducer,
		sumNumbers: sumNumbersReducer,
		gameInitialized: gameInitializedReducer,
		subGameStarted: subGameStartedReducer,
		fail: failReducer,
		fact: factReducer
	})

export default reducers;