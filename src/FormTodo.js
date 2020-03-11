import React from "react";
import { connect } from "./redux/connect";
import handlers from "./handlers";
function FormTodo(props) {
  const handleAddNewTodo = async () => {
    await props.handleAddNewTodo({
      title: "I live banana",
      date: new Date(),
      completed: false
    });
  };

  return <button onClick={handleAddNewTodo}>Add new todo</button>;
}

const mapDispatchToProps = dispatch => {
  return {
    ...handlers(dispatch)
  };
};

export default connect(
  null,
  mapDispatchToProps
)(FormTodo);
