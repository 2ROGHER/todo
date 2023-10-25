import { ADD_TASK, GET_TASK, INCREMENT, UPDATE_TASK, DELETE_TASK, COMPLETED_TASK } from "../action-types";

// id: The id of the task that will be increase for each dispatched acction.
let taskId = 3;

/* CRUD ACTIONS */

// Add task action
export const addTask = ({ id, title, description, levels, time }) => {
    return {
        type: ADD_TASK,
        payload: {
            id: id === undefined ? taskId++ : id,
            title,
            description,
            levels,
            time
        }
    }
};

// Get tasks 
export const getTask = () => {
    return {
        type: GET_TASK,
    };
};

// Update task action
export const updateTask = ({ id, title, description, levels, time }) => {
    return {
        type: UPDATE_TASK,
        payload: {
            id,
            title,
            description,
            levels,
            time
        },
    }
};

// Delete task action
export const deleteTask = (id) => {
    return {
        type: DELETE_TASK,
        payload: { id },
    }
};

// Completed action 
export const completedTask = (id) => {
    return {
        type: COMPLETED_TASK,
        payload: { id },
    }
};


// Increment action to test my application 'todo'
export const incrementCounter = (value) => {
    console.log('Returning the action with value: ', value);
    return {
        type: INCREMENT,
        payload: value,
    };
};
