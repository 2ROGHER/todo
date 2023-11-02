import PropTypes from "prop-types";
// Let's import styles from the '../../styles/css/task.css' file.
import "../../styles/css/task.css";

import { RxLapTimer } from "react-icons/rx";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";

const Task = ({ data, onDeleteTask, onHandleUpdateTask, onCompleted,  }) => {
  console.log(data);
  return (
    <tbody className={"t-table-body"}>
      {data?.map((t, i) => (
        <tr
          id={t.id}
          key={i}
          className={!t.completed ? "t-body-container" : "completed-task"}
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
              onClick={() => onHandleUpdateTask(t.id)}
            >
              <CiEdit />
              <span>edit</span>
            </button>
          </td>
          <td >
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
};

export default Task;
