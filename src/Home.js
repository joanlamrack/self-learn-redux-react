import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
	return {
		login: state.login
	};
};

function toggleLogin(){
	return { type: "DO_LOGIN", payload:{} }
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
