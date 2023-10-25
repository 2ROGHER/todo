import React from "react";
import PropTypes from "prop-types";
import Task from "./Task";
import TaskFormContainer from "../container/TaskFormContainer";
// css styles for TaskListComponent.
import "../../styles/css/task.list.css";

const TaskList = ({ todos, updateTaskAction, deleteTaskAction }) => {
  const handleUpdateTask = (e) => {
    const arr = todos.filter((t) => t.id === e);
    updateTaskAction(...arr);
  };

  const handleClick = () => {
    document
      .querySelector(".t-f-container")
      .classList.toggle("t-f-container-collapsed");
    console.log('selected element', form);
  };
  return (
    <div className="t-container">
      <h1 className="t-title">task to do</h1>
      <button onClick={handleClick} className="t-btn-add">add new task</button>
      <div className="t-separator"></div>
      <TaskFormContainer />
      <Task
        data={todos}
        onDeleteTask={deleteTaskAction}
        onHandleUpdateTask={handleUpdateTask}
      />
    </div>
  );
};

TaskList.propTypes = {
  todos: PropTypes.array,
};

export default TaskList;
