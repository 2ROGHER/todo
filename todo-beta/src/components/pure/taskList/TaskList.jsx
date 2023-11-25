import PropTypes from "prop-types";
import Task from "./Task";
// css styles for TaskListComponent.
import "./task.list.css";

import { useState } from "react";

/**
 *
 * @param {Array} todos - All list of tasks.
 * @param {Function} updateTaskAction - Dispatch function to update the list of tasks.
 * @param {Function} deleteTaskAction - Dispatch function to delete the list of tasks.
 * @returns
 */
const TaskList = ({
  todos,
  updateTaskAction,
  deleteTaskAction,
  completeTaskAction,
}) => {
  const [loginUser, setLoginUser] = useState(true);

  /**
   * This function allows us update a determinate task of the list of tasks.
   * @param {Event} e
   */
  const handleUpdateTask = (e) => {
    // This code line allows us to active the popup window while we press the 'edit' button.
    document
      .querySelector(".t-f-container")
      .classList.add("t-f-container-popup");
    // This code allows us to activate the animation from the 'close' button for the popup window.
    document.querySelector(".t-btn-add").classList.add("active-cross-btn");
    // This code line allows us update the tasks in the same form that we use to create a new task.
    const arr = todos.filter((t) => t.id === e);
    updateTaskAction(...arr);
  };

  /**
   * This function allows us to handle  the hidden o show of the popup window form
   * @returns {*} void.
   */
  const handleClick = () => {
    let element = document.querySelector(".t-f-container");
    let x = document.querySelector(".t-btn-add");

    // This code is used to toggle the open and close the popup window.
    element.classList.toggle("t-f-container-popup");
    // let's move the "+" charactet to "x"
    x.classList.toggle("active-cross-btn");
  };

  /**
   * This function allows modify the toggle edit button.
   * When the user make click in the 'edit' button, we need that view not
   * have any styles for the completed task.
   * @return {*} void.
   */
  const handleEditTask = () => {
    console.log("clicked at the edit task button");
    var tr = document.getElementsByTagName("tr")[1];
    console.log("this is the node ", tr);
    tr.className === "completed-task"
      ? (tr.className = "t-body-container")
      : null;
    // document.querySelector('.t-body-container').classList.add('t-body-container')
  };

  /**
   * This function allows us to show or hidden the 'side menubar' for 
   * more options in the task list.
   * This function is passed to child component through down props.
   
   * @param {number} value This value allow us to identify a determinate 
      task from all task in the list.
   */
  const openSideMenubar = (value) => {
    document
      .getElementById(`t-sidemenu-${value}`)
      .classList.toggle("active-sidemenu");
  };
  return (
    <main className="t-container">
      {/* {loginUser ? <LoginVerificationContainer /> : null} */}
      {/* <button onClick={handleClick} className="t-btn-add">
        <span id="cross">&#43;</span>
      </button> */}
      {/* <FilterBar /> */}

      {/* Here goes the header list */}
      <Task
        data={todos}
        onDeleteTask={deleteTaskAction}
        onHandleUpdateTask={handleUpdateTask}
        onCompleted={completeTaskAction}
        handleEditTask={handleEditTask}
        onOpenSideMenubar={openSideMenubar}
      />
    </main>
  );
};

TaskList.propTypes = {
  todos: PropTypes.array,
  updateTaskAction: PropTypes.func.isRequired,
  deleteTaskAction: PropTypes.func.isRequired,
  completeTaskAction: PropTypes.func.isRequired,
};

export default TaskList;
