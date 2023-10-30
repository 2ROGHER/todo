import React from "react";
import PropTypes from "prop-types";
import Task from "./Task";
import TaskFormContainer from "../container/TaskFormContainer";
// css styles for TaskListComponent.
import "../../styles/css/task.list.css";

/**
 *
 * @param {Array} todos - All list of tasks.
 * @param {Function} updateTaskAction - Dispatch function to update the list of tasks.
 * @param {Function} deleteTaskAction - Dispatch function to delete the list of tasks.
 * @returns
 */
const TaskList = ({ todos, updateTaskAction, deleteTaskAction }) => {
  /**
   * This function allows update a determinate task from the list of tasks.
   * @param {Event} e
   */
  const handleUpdateTask = (e) => {
    const arr = todos.filter((t) => t.id === e);
    updateTaskAction(...arr);
  };

  /**
   * This function change the style of the  task to pending to complete.
   * @param {number} id
   */
  const onCompleted = (id) => {
    let element = document.getElementById(id);
    let editBtn = element.childNodes[5].childNodes[0];

    element.style.textDecoration = "line-through";
    element.style.color = "gray";
    element.style.background = "#494949";
    element.style.border = "1px solid #494949";
    editBtn.style.background = "#5555";
    editBtn.style.border = "1px solid #595959";
    editBtn.style.color = "gray";
    editBtn.style.cursor = "not-allowed";
  };

  /**
   * This function allows to handle  the hidden o show of the popup window form
   */
  const handleClick = (e) => {
    let element = document.querySelector(".t-f-container");
    let x = e.target.childNodes[0];

    element.classList.toggle("t-f-container-popup");
    console.log(e.target.childNodes[0]);
    // let's move the "+" charactet to "x"
    x.style.transform = "rotate(45deg)";
  };
  return (
    <div className="t-container">
      <h1 className="t-title">task to do</h1>
      <button onClick={handleClick} className="t-btn-add">
        <div>&#43;</div>
      </button>
      <div className="t-separator"></div>
      <TaskFormContainer />
      <Task
        data={todos}
        onDeleteTask={deleteTaskAction}
        onHandleUpdateTask={handleUpdateTask}
        onCompleted={onCompleted}
      />
    </div>
  );
};

TaskList.propTypes = {
  todos: PropTypes.array,
};

export default TaskList;
