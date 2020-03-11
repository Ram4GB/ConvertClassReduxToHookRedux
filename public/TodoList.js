import React, { useEffect } from "react";
import handlers from "../src/handlers";
import { connect } from "";
import { moduleTodo } from "../src/reducers/todoReducer";
function TodoList(props) {
  useEffect(() => {
    props.getData();
  }, []);

  const renderList = () => {
    return props.todos.map(todo => {
      return <p key={todo.id}>{todo.title}</p>;
    });
  };

  // console.log(props);
  // console.log(store);
  return <div>{renderList()}</div>;
}

const mapStateToProps = state => {
  return {
    todos: state[moduleTodo].todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ...handlers(dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
