import React from "react";
import {connect} from "react-redux";

const mapStateToProps = state => {
	return {
		todos: state
	};
};

const Home = props => {
	return <h1> Halo {props}</h1>;
};

export default connect(mapStateToProps,null)(Home);
