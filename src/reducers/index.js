import { initialStateTodo, moduleTodo, reducerTodo } from "./todoReducer";
import { initialStateUser, moduleUser, reducerUser } from "./userReducer";
import combineReducer from "../redux/comebineReducer";

// This is just comebineReducer
export const rootReducer = combineReducer({
  [moduleTodo]: reducerTodo,
  [moduleUser]: reducerUser
});

// This is different than normal 'cause useReducer need a initialState
// So we put it together
// Sweet
export const initialState = {
  [moduleTodo]: initialStateTodo,
  [moduleUser]: initialStateUser
};
