import { createStore } from "redux";
import allReducers from "./reducers";
import { Provider } from "react-redux";
import App from "../App";

const store = createStore(allReducers);
