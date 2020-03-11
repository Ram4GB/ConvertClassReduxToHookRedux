import React, { useEffect } from "react";
import handlers from "../src/handlers";
import { connect } from "./redux/connect";
import { moduleTodo } from "../src/reducers/todoReducer";
function TodoList(props) {
  useEffect(() => {
    props.getData();
  }, []);

  const handleDelete = async id => {
    await props.handleDelete(id);
  };

  const renderList = () => {
    return props.todos.map(todo => {
      return (
        <div key={todo.id}>
          <span key={todo.id}>{todo.title}</span>
          <button onClick={() => handleDelete(todo.id)}>X</button>
        </div>
      );
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
