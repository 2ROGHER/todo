import { ADD_TASK, GET_TASK, INCREMENT } from "../action-types";

// id: The id of the task that will be increase for each dispatched acction.
let taskId = 0;

/* CRUD ACTIONS */

// Add task action
export const addTask = ({ id, title, description, levels, time }) => {
    return {
        type: ADD_TASK,
        payload: {
            id,
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

// Increment action
export const incrementCounter = () => {
    return {
        type: INCREMENT,
        payload: 1,
    };
};
