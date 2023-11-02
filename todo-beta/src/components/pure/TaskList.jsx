import React from "react";
import PropTypes from "prop-types";
import Task from "./Task";
import TaskFormContainer from "../container/TaskFormContainer";
// css styles for TaskListComponent.
import "../../styles/css/task.list.css";
import FilterBar from "./FilterBar";

/**
 *
 * @param {Array} todos - All list of tasks.
 * @param {Function} updateTaskAction - Dispatch function to update the list of tasks.
 * @param {Function} deleteTaskAction - Dispatch function to delete the list of tasks.
 * @returns
 */
const TaskList = ({ todos, updateTaskAction, deleteTaskAction, completeTaskAction }) => {
  /**
   * This function allows update a determinate task from the list of tasks.
   * @param {Event} e
   */
  const handleUpdateTask = (e) => {
    const arr = todos.filter((t) => t.id === e);
    updateTaskAction(...arr);
  };


  /**
   * This function allows to handle  the hidden o show of the popup window form
   */
  const handleClick = (e) => {
    let element = document.querySelector(".t-f-container");
    let x = document.querySelector('.t-btn-add');

    // This code is used to toggle the open and close the popup window.
    element.classList.toggle("t-f-container-popup");
    // let's move the "+" charactet to "x"
    x.classList.toggle('active');
  };
  return (
    <div className="t-container">
      <h1 className="t-title">task to do</h1>
      <button onClick={handleClick} className="t-btn-add">
        <span id="cross">&#43;</span>
      </button>
      <FilterBar />
      <div className="t-separator"></div>
      <TaskFormContainer />
      <Task
        data={todos}
        onDeleteTask={deleteTaskAction}
        onHandleUpdateTask={handleUpdateTask}
        onCompleted={completeTaskAction}
      />
    </div>
  );
};

TaskList.propTypes = {
  todos: PropTypes.array,
};

export default TaskList;
