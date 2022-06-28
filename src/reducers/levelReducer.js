const levelReducer = (state = 0, action) => {
	switch (action.type) {
		case "levelup":
			return state + action.payload;
		default:
			return state;
	}
}


export default levelReducer;