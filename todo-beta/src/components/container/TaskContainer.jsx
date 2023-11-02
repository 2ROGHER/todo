import { connect } from "react-redux";
import {
  completedTask,
  deleteTask,
  updateTask,
} from "../../redux/actions/index.js";
import TaskList from "../pure/TaskList.jsx";

const filterTasks = (todos, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "PRIORITY":
      return [
        ...todos.filter((t) => t.priority === "URGENT"),
        ...todos.filter((t) => t.priority === "HIGH"),
        ...todos.filter((t) => t.priority === "MEDIUM"),
        ...todos.filter((t) => t.priority === "NORMAL"),
        ...todos.filter((t) => t.priority === "LOW"),
      ];
    case "LEVEL":
    return [
      ...todos.filter((t) => t.level === "EASY"),
      ...todos.filter((t) => t.level === "MEDIUM"),
      ...todos.filter((t) => t.level === "CHALLENGING"),
      ...todos.filter((t) => t.level === "HARD"),
    ];
    case "COMPLETED":
      return todos.filter((t) => t.completed);
    case "PENDING":
      return todos.filter((t) => !t.completed);
    default:
      return todos;
  }
};

/**
 * This function allows comunicate send the state to other components.
 * @param {Object} state - The state  with all global states.
 * @returns {Object} - Returns a object with the global states.
 */
const mapStateToProps = (state) => {
  return {
    todos: filterTasks(state.todosState, state.filterState),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateTaskAction: (task) => {
      dispatch(updateTask(task));
    },
    deleteTaskAction: (id) => {
      dispatch(deleteTask(id));
    },
    completeTaskAction: (id) => {
      dispatch(completedTask(id));
    },
  };
};

const TaskContainer = connect(mapStateToProps, mapDispatchToProps)(TaskList);

export default TaskContainer;
