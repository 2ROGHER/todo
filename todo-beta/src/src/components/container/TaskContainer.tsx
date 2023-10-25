import { connect } from 'react-redux'
import { addTask } from '../../redux/actions/index';
import TaskLists from './TaskLists';

const mapStateToProps = (state) => {
  return { 
    todos: state.todosState
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    addTaskAction: (task) => {
      dispatch(addTask(task));
    }
  };
};

const TaskContainer = connect(mapStateToProps, mapDispatchToProps)(TaskLists);

export default TaskContainer;