import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
	return {
		login: state.login
	};
};

// componentDidMount(){
// 	axios.get
// 	.then(){
// 		//lalallal
// 		props.doLogin(id)
// 	}
// 	.catch(){

// 	}
// }

function toggleLogin(id){
	return { type: "DO_LOGIN", payload:id }
}

const mapDispatchToProps = dispatch => {
	return {
		doLogin: () => {
			dispatch(toggleLogin());
		}
	};
};

const Home = props => {
	return (
		<div>
			<h1> Halo Eri Kamu {props.login.isLogin ? "Login" : "Tidak Login"}</h1>
			<button onClick={props.doLogin}>LOGIN</button>
		</div>
	);
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);
