import React from 'react'
import { connect } from 'react-redux'
import TaskForm from '../pure/form/TaskForm';
import { addTask } from '../../redux/actions';

const mapStateToProps = (state ) => {
  return {
    todo: state.updateState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTaskAction: (task) => {
      dispatch(addTask(task));
    },
  };
};
const TaskFormContainer = connect(mapStateToProps, mapDispatchToProps)(TaskForm);

export default TaskFormContainer; 