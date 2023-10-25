import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { LEVELS } from "../../models/levels.enum";
import OptionComponent from "./OptionComponent";
import { updateTask } from "../../redux/actions";
import '../../styles/css/task.form.css';

const TaskForm = ({ todo, addTaskAction }) => {
  console.log("todos update", todo);
  const [updateTodo] = todo;

  const [task, setTask] = useState({
    id: "",
    title: "",
    description: "",
    completed: false,
    levels: "",
    time: "",
  });
  // In useEffect(),  we can change the value of the selected task to update.

  useEffect(() => {
    updateTodo &&
      setTask({ ...updateTodo});
  }, [updateTodo]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  return (
    <div className="t-f-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("submit the task to server");
          addTaskAction(task);
          setTask({ title: "", description: "", levels: "", time: "" });
        }}
      >
        <input
          type="text"
          placeholder="* Title"
          name="title"
          value={task.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          value={task.description}
          placeholder="* Description"
          onChange={handleChange}
        />

        <input
          type="checkbox"
          name="completed"
          value={task.completed}
          onChange={handleChange}
        />

        <OptionComponent
          name="levels"
          value={task.levels}
          onChange={handleChange}
        />
        <input
          type="text"
          name="time"
          value={task.time}
          placeholder="* Time"
          onChange={handleChange}
        />

        <button type="submit">add</button>
      </form>
    </div>
  );
};

TaskForm.propTypes = {
  addTaskAction: PropTypes.func.isRequired,
};

export default TaskForm;