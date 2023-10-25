import { ADD_TASK, COMPLETED_TASK, DELETE_TASK, GET_TASK, INCREMENT, UPDATE_TASK } from "../action-types";
import { LEVELS } from '../../models/levels.enum';

//Define the initial state of the application fro CRUD actions.
let initialState = [
    {
        id: 0,
        title: 'New Task 1',
        description: 'New Task 1 description',
        completed: false,
        levels: LEVELS.NORMAL,
        time: '00:30'
    },
    {
        id: 1,
        title: 'New Task 2',
        description: 'New Task 2 description',
        completed: false,
        levels: LEVELS.NORMAL,
        time: '00:30'
    },
    {
        id: 2,
        title: 'New Task 3',
        description: 'New Task 3 description',
        completed: false,
        levels: LEVELS.NORMAL,
        time: '00:30'
    }
]

export const todosReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TASK:
            console.log('returning all payload data', payload, state[payload.id]);

            return state.find(t => t.id === payload.id) ?
                [...state.slice(0, payload.id), {...payload}, ...state.slice(payload.id+1)]
                : [...state, { ...payload }];
        case DELETE_TASK:
            return state.filter(t => t.id !== payload.id);

        case COMPLETED_TASK:
            return state.filter(t => t.completed);

        default:
            return state;
    }
};