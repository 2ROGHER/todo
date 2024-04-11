import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
// Import icons from 'react-icons'
import { TiPinOutline } from "react-icons/ti";
import { MdNotificationsActive } from "react-icons/md";
import { CiImageOn } from "react-icons/ci";
import { IoImageOutline } from "react-icons/io5";
import { LuImage } from "react-icons/lu";
import { VscArchive } from "react-icons/vsc";
import { IoColorPaletteOutline } from "react-icons/io5";
import { LiaUndoAltSolid } from "react-icons/lia";
import { LiaRedoAltSolid } from "react-icons/lia";
import { FaPlus } from "react-icons/fa6";

import './task.form.css';

const TaskForm = ({ todo, addTaskAction }) => {
  // const [updateTodo] = todo;

  console.log(addTaskAction, 'todos are', todo);
  const [task, setTask] = useState({
    title: "",
    description: "",
    completed: false,
    archived: false,
    color: "#2a2a2a",
    pin: false, // fijar las tareas
    date: `${new Date()}`,
    favorite: false,
    image: undefined,
    time: "00:30", // TODO: preview this after all.
  });

  // In useEffect(),  we can change the value of the selected task to update.
  // useEffect(() => {
  //   updateTodo &&
  //     setTask({ ...updateTodo});
  // }, [updateTodo]);

  const handleCreateTask = () => {
    addTaskAction(task);
    setTask({
      ...task,
      title: "",
      description: "",
    });
  };

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  console.log("task is", task);

  return (
    <div className="t-f-container">
      <div className="t-f-body">
        <span id="t-pin-op">
          <TiPinOutline />
        </span>
        <form
          className="t-f-form"
          onSubmit={(e) => {
            e.preventDefault();
            console.log("submit the task to server");
            // Execute the `handleSubmit` function to hidden the popup window from the view.
            handleChange();
          }}
        >
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={task.title}
            onChange={handleChange}
          />
          <textarea
            type="text"
            name="description"
            value={task.description}
            placeholder="Describe task..."
            onChange={handleChange}
          />
        </form>
      </div>
      <div className="t-f-footer">
        <div>
          <MdNotificationsActive />
        </div>
        <div>
          <IoColorPaletteOutline />
        </div>
        <div>
          <IoImageOutline />
        </div>
        <div>
          <VscArchive />
        </div>
        <div>
          <LiaUndoAltSolid />
        </div>

        <div>
          <LiaRedoAltSolid />
        </div>
        <div>
          <FaPlus />
        </div>
        <div className="t-f-create-btn">
          <button
            onClick={handleCreateTask}
            className="t-f-btn-submit"
            type="submit"
          >
            create
          </button>
        </div>
      </div>
    </div>
  );
};

TaskForm.propTypes = {
  addTaskAction: PropTypes.func.isRequired,
  todo: PropTypes.object,
};

export default TaskForm;
