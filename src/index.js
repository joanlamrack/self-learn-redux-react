import { createStore } from "redux";

const initialstate = {
	title: "title",
	counter: 10
};

const todos = (state = initialstate, action) => {
	return state;
};

const store = createStore(todos);
export default store;
