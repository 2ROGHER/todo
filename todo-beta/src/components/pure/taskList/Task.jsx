import PropTypes from "prop-types";
// Let's import styles from the '../../styles/css/task.css' file.
import "./task.css";

import { RxLapTimer } from "react-icons/rx";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";
const Task = ({ data, onDeleteTask, onHandleUpdateTask, onCompleted, handleEditTask }) => {
  return (
    <tbody className={"t-table-body"}>
      {data?.map((t, i) => (
        <tr
          id={t.id}
          key={i}
          className={!t.completed ? "t-table-body-row" : "completed-task"}
          onClick={() => {
            onCompleted(t.id);
          }}
        >
          <td>{t.title}</td>
          <td>{t.description}</td>
          <td>{t.priority}</td>
          <td>
            <input
              type="checkbox"
              name="completed"
              value={t.completed}
              checked={t.completed}
            />
          </td>
          <td>{t.level}</td>
          <td>
            <RxLapTimer /> {t.time}
          </td>
          <td>
            <button
              className="t-btn-edit"
              onClick={() => {
                onHandleUpdateTask(t.id);
                handleEditTask();
              }}
            >
              <FiEdit2 />
            </button>

            <button
              className="t-btn-delete"
              onClick={() => {
                onDeleteTask(t.id);
                console.log(t.id);
              }}
            >
              <RiDeleteBin6Line />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

Task.propTypes = {
  data: PropTypes.array,
  onDeleteTask: PropTypes.func.isRequired,
  onHandleUpdateTask: PropTypes.func.isRequired,
  onCompleted: PropTypes.func.isRequired,
  handleEditTask: PropTypes.func.isRequired,
};

export default Task;
