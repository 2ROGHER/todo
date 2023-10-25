import React from "react";
import PropTypes from "prop-types";

const Task = ({ data, onDeleteTask, onHandleUpdateTask }) => {
  return (
    <ul>
      {data?.map((t, i) => (
        <li key={i}>
          {t.title} {t.description} {t.levels} {t.time}
          <button onClick={() => onHandleUpdateTask(t.id)}>edit</button>
          <button
            onClick={() => {
              onDeleteTask(t.id);
              console.log(t.id);
            }}
          >
            detele
          </button>
        </li>
      ))}
    </ul>
  );
};

Task.propTypes = {
  data: PropTypes.array,
  onDeleteTask: PropTypes.func.isRequired,
};

export default Task;
