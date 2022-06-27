import { combineReducers } from "redux";
import levelReducer from "./levelReducer";

const reducers = combineReducers({
		level: levelReducer
	})

export default reducers;