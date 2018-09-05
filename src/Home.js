import React from "react";
import { connect } from "react-redux";
import getPeopleAction from "./action";

const mapStateToProps = state => {
	return {
		login: state.login,
		people: state.people
	};
};

function toggleLogin(id) {
	return { type: "DO_LOGIN", payload: id };
}

const mapDispatchToProps = dispatch => {
	return {
		doLogin: () => {
			dispatch(toggleLogin());
		},
		getPeople: () => {
			dispatch(getPeopleAction());
		}
	};
};

const Home = props => {
	return (
		<div>
			<h1> Halo Joan Kamu {props.login.isLogin ? "Login" : "Tidak Login"}</h1>
			<button onClick={props.doLogin}>LOGIN</button>
			REDUX-THUNK
			<h6>
				{/* {props.people.data ? (
					<ul>
						{props.people.data.map(x => (
							<li>{x}</li>
						))}
					</ul>
				) : (
					"No data"
				)} */
				JSON.stringify(props.people)
				}
			</h6>
			<button onClick={props.getPeople}>ORANG</button>
		</div>
	);
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);

// componentDidMount(){
// 	axios.get
// 	.then(){
// 		//lalallal
// 		props.doLogin(id)
// 	}
// 	.catch(){

// 	}
// }
