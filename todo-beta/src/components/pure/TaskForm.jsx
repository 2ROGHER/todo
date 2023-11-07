import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import OptionComponent from "./OptionComponent";
import { LEVELS } from "../../models/levels.enum";
import { PRIORITY } from "../../models/priority.enum";

import '../../styles/css/task.form.css';

const TaskForm = ({ todo, addTaskAction }) => {
  const [updateTodo] = todo;
  const [task, setTask] = useState({
    id: "",
    title: "",
    description: "",
    priority: "",
    completed: false,
    level: "false",
    time: "",
  });

  const handleSubmit = () => {
    // This code allows to hidden the popup window from the view, when the user click 
    // in the submit button
    document.querySelector('.t-f-container').classList.remove('t-f-container-popup');
    // Let's change the animation of the close 'button' when the user make 'click' in submit button.
    document.querySelector('.t-btn-add').classList.remove('active-cross-btn');
  };
  // In useEffect(),  we can change the value of the selected task to update.
  useEffect(() => {
    updateTodo &&
      setTask({ ...updateTodo});
  }, [updateTodo]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
    console.log(e.target.name, 'value is: ', e.target.value);
  };
  return (
    <div className="t-f-container">
      <form
        className="t-f-form"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("submit the task to server");
          addTaskAction(task);
          setTask({
            title: "",
            description: "",
            completed: false,
            priority: "",
            level: "",
            time: "",
          });
          // Execute the `handleSubmit` function to hidden the popup window from the view.
          handleChange();
        }}
      >
        <input
          type="text"
          placeholder="* Title"
          name="title"
          value={task.title}
          onChange={handleChange}
        />
        <textarea
          type="text"
          name="description"
          value={task.description}
          placeholder="* Description..."
          onChange={handleChange}
        />
        <OptionComponent
          name="level"
          value={task.level}
          onChange={handleChange}
          priority={LEVELS}
        />
        <OptionComponent
          name="priority"
          value={task.priority}
          onChange={handleChange}
          priority={PRIORITY}
        />
        <input
          type="text"
          name="time"
          value={task.time}
          placeholder="* Time"
          onChange={handleChange}
        />
        <button onClick={handleSubmit} className="t-f-btn-submit" type="submit">
          Add task
        </button>
      </form>
    </div>
  );
};

TaskForm.propTypes = {
  addTaskAction: PropTypes.func.isRequired,
};

export default TaskForm;
