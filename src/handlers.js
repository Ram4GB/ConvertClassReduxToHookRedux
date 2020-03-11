import Axios from "axios";
import * as todoActions from "./actions/todoActions";

export default function(dispatch) {
  return {
    getData: async function() {
      return await Axios({
        url: "https://5ce2c23be3ced20014d35e3d.mockapi.io/api/todos",
        method: "GET",
        data: null
      }).then(result => {
        dispatch({ type: "GET_DATA", payload: result.data });
      });
    },
    handleAddNewTodo: async function(data) {
      return await Axios({
        url: "https://5ce2c23be3ced20014d35e3d.mockapi.io/api/todos",
        method: "POST",
        data: data
      }).then(result => {
        dispatch({ type: "ADD_NEW_TODO", payload: result.data });
      });
    },
    handleDelete: async function(id) {
      return await Axios({
        url: "https://5ce2c23be3ced20014d35e3d.mockapi.io/api/todos/" + id,
        method: "DELETE",
        data: null
      }).then(result => {
        dispatch(todoActions.deleteTodo(result.data));
      });
    }
  };
}
