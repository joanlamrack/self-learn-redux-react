
import axios from "axios";

function getPeopleAction() {
	return (dispatch) => {
		dispatch({ type: "GET_PEOPLE_REQUEST" });
		axios
			.get("https://swapi.co/api/people")
			.then(({ data }) => {
				console.log(data);
				
				dispatch({
					type: "GET_PEOPLE_SUCCESS",
					payload: data
				});
			})
			.catch(({ response }) => {
				dispatch({
					type: "GET_PEOPLE_FAILED",
					payload: response
				});
			});
	};
}

export default getPeopleAction;