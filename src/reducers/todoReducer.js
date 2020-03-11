//Todo reducer
import * as todoActions from "../actions/todoActions";

export const moduleTodo = "TODO";

export const initialStateTodo = {
  todos: []
};

export const reducerTodo = function(state, action) {
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,
        todos: action.payload
      };
    case "ADD_NEW_TODO":
      return {
        ...state,
        todos: [action.payload, ...state.todos]
      };
    case todoActions.deleteTodo().type:
      let newArray = [];
      newArray = state.todos.filter(todo => {
        return todo.id !== action.payload.id;
      });
      return {
        ...state,
        todos: newArray
      };
    default:
      return state;
  }
};
