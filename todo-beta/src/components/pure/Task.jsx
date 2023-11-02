import React, { useState } from "react";
import PropTypes from "prop-types";
// Let's import styles from the '../../styles/css/task.css' file.
import "../../styles/css/task.css";

import { RxLapTimer } from "react-icons/rx";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";

const Task = ({ data, onDeleteTask, onHandleUpdateTask, onCompleted,  }) => {
  console.log(data);
  return (
    <ul className={"t-ul-container"}>
      {data?.map((t, i) => (
        <li
          id={t.id}
          key={i}
          className={
            !t.completed ? "t-li-container" : "completed-task"
          }
          onClick={() => {
            onCompleted(t.id);
          }}
        >
          <div>{t.title}</div>
          <div>{t.description}</div>
          <div>{t.priority}</div>
          <div>
            <input
              type="checkbox"
              name="completed"
              value={t.completed}
              checked={t.completed}
            />
            {t.level}
          </div>
          <div>
            <RxLapTimer /> {t.time}
          </div>
          <div>
            <button
              className="t-btn-edit"
              onClick={() => onHandleUpdateTask(t.id)}
            >
              <CiEdit />
              <span>edit</span>
            </button>
          </div>
          <div>
            <button
              className="t-btn-delete"
              onClick={() => {
                onDeleteTask(t.id);
                console.log(t.id);
              }}
            >
              <RiDeleteBin6Line />
              <span>delete</span>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

Task.propTypes = {
  data: PropTypes.array,
  onDeleteTask: PropTypes.func.isRequired,
  onCompleted: PropTypes.func.isRequired,
};

export default Task;
