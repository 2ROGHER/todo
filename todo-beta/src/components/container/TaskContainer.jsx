import { connect } from 'react-redux'
import { addTask, completedTask, deleteTask, updateTask } from '../../redux/actions/index.js';
import TaskList from '../pure/TaskList.jsx';

const filterTasks = (todos, filter) => {
    switch(filter) {
        case 'SHOW_ALL':
            return todos;
        case 'PRIORITY': 
            return todos.filter(t => t.priority);
        case 'COMPLETED':
            return todos.filter(t => t.completed);
        case 'PENDING':
            return todos.filter(t => !t.completed);
        default:
            return todos;

    }
};

const mapStateToProps = (state) => {
    // return {
    //     todos: state.todosState,
    // };
    return { 
        todos: filterTasks(state.todosState, state.filterState),
    }
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
            dispatch(completedTask(id))
        }
    };
};

const TaskContainer = connect(mapStateToProps, mapDispatchToProps)(TaskList);

export default TaskContainer;