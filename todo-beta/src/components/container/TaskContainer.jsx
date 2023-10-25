import { connect } from 'react-redux'
import { addTask, deleteTask, updateTask } from '../../redux/actions/index.js';
import TaskList from '../pure/TaskList.jsx';



const mapStateToProps = (state) => {
    return {
        todos: state.todosState,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateTaskAction: (task) => {
            dispatch(updateTask(task));
        },
        deleteTaskAction: (id) => {
            dispatch(deleteTask(id));
        }
    };
};

const TaskContainer = connect(mapStateToProps, mapDispatchToProps)(TaskList);

export default TaskContainer;