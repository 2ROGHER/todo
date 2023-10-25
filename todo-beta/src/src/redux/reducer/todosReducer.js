import { ADD_TASK, GET_TASK, INCREMENT } from "../action-types";
import { LEVELS } from '../../models/levels';

//Define the initial state of the application fro CRUD actions.
let initialState = [
    {
        id: '1',
        title: 'New Task 1',
        description: 'New Task 1 description',
        completed: false,
        levels: LEVELS.NORMAL,
        time: '00:30'
    }
]

export const todosReducer = (state = initialState, { action, payload }) => {
    console.log(action, payload);
    switch (action) {
        case ADD_TASK:
            return [
                ...state,
                {
                    id: payload.id,
                    title: payload.title,
                    description: payload.description,
                    levels: payload.levels,
                    time: payload.time,
                }
            ];
        case GET_TASK:
            return [
                ...state,
            ];


        default:
            return state;
    }
};