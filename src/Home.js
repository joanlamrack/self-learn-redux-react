import React from "react";
import {connect} from "react-redux";

const mapStateToProps = state => {
	return {
		title: state.title
	};
};

const Home = props => {
	return <h1> Halo {props.title}</h1>;
};

export default connect(mapStateToProps,null)(Home);
