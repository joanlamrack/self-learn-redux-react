import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

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

const peopleinitial = {
	loading: false,
	error: {},
	data: null
};

const people = (state = peopleinitial, action) => {
	switch (action.type) {
	case "GET_PEOPLE_REQUEST":
		return { ...state, loading: true };
	case "GET_PEOPLE_SUCCESS":
		return {
			...state,
			loading: false,
			data: action.payload,
			error: undefined
		};
	case "GET_PEOPLE_FAILED":
		return {
			...state,
			loading: false,
			data: null,
			error: action.payload
		};
	default:
		return state;
	}
};

const rootReducers = combineReducers({
	todos,
	login,
	people
});

const store = createStore(
	rootReducers,
	compose(
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);
export default store;
