import { createStore } from "redux";

const initialstate = [{
	title: "mau makan",
	duedate : "Besok"
}];

const todos = (state = initialstate, action) => {
	return state;
};

const initialLoginStatus = {
	isLogin: false,
	id:null
}

const login = (state = initialLoginStatus, action)=>{
	return state;
}

const store = createStore(todos);
export default store;
