import React from "react";
import {connect} from "react-redux";

const mapStateToProps = state => {
	return {
		todos: state.todos
	};
};

const Home = props => {
	return <h1> Halo {props.todos[0].title}</h1>;
};

export default connect(mapStateToProps,null)(Home);
