import React, { useReducer } from "react";
import "./styles.css";
import Provider from "./redux/Provider";
import TodoList from "./TodoList";
import { rootReducer, initialState } from "./reducers";
import FormTodo from "./FormTodo";

export default function App() {
  //Before we start
  //Step 1 create rootReducer
  //Step 2 create initialState
  //Step 3 useReducer to return 2 parameter state and dispatch
  //Step 4 wrap Provide to you app and now code like class
  const [state, dispatch] = useReducer(rootReducer, initialState);

  const createStore = (state, dispatch) => {
    return {
      state,
      dispatch
    };
  };

  const store = createStore(state, dispatch);

  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <FormTodo />
        <TodoList />
      </div>
    </Provider>
  );
}
