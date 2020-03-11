import React, { createContext } from "react";

// combineReducer

export const Context = createContext();

export default function(props) {
  return (
    <div>
      <Context.Provider
        value={{ ...props.store.state, dispatch: props.store.dispatch }}
      >
        {props.children}
      </Context.Provider>
    </div>
  );
}
