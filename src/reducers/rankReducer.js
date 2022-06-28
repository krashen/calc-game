import produce from "immer";

const rankReducer = (state = [], action) => {
	switch (action.type) {
		case "addnew":
			return produce(state, draft => {
				draft.push(action.payload)
			})
		default:
			return state;
	}
}


export default rankReducer;