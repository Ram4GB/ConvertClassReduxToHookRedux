import React, { useContext } from "react";
import { Context } from "./Provider";

// connect(mapStateToProps, mapDispatchToProps)
// receive two parameters and return new function put Component
// we need to return a new Component for this in line 10
// we run all the function mapStateToProps and mapDispatchToProps and put it like a props
export const connect = (mapStateToProps, mapDispatchToProps) => {
  return WrapReactNode => {
    return function(props) {
      // this is the component React
      let store = useContext(Context);
      let state = mapStateToProps ? mapStateToProps(store) : {};
      let handlers = mapDispatchToProps
        ? mapDispatchToProps(store.dispatch)
        : {};
      let newProps = {
        ...props,
        ...state,
        ...handlers
      };
      return <WrapReactNode {...newProps} />;
    };
  };
};
