import { createStore, combineReducers } from "redux";

const initialstate = [
	{
		title: "mau makan",
		duedate: "Besok"
	}
];

const todos = (state = initialstate, action) => {
	return state;
};

const initialLoginStatus = {
	isLogin: false,
	id: null
};

const login = (state = initialLoginStatus, action) => {
	switch (action.type) {
	case "DO_LOGIN":
		return { ...state, isLogin: !state.isLogin }; //overridiing case
	default:
		return state;
	}
};

const rootReducers = combineReducers({
	todos,
	login
});

const store = createStore(rootReducers);
export default store;
