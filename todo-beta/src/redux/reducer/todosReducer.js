import { ADD_TASK, COMPLETED_TASK, DELETE_TASK } from "../action-types";
//Define the initial state of the application fro CRUD actions.

// note: una tarea debe tener tambien debe tener la opcion de compartir
// y tambien poder descargarlo 

const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' };
let initialState = [
    {
        id: 0,
        title: 'New Task 1',
        description: 'New Task 1 Description',
        completed: true,
        archived: false,
        color: '#2a2a2a',
        pin: false, // fijar las tareas
        date: `${new Date()}`,
        favorite: false,
        image: undefined,
        time: '00:30' // time to complete the task
    },
    {
        id: 1,
        title: 'New Task 2',
        description: 'New Task 2 Description',
        completed: true,
        archived: false,
        color: '#2a2a2a',
        pin: false, // fijar las tareas
        date: `${new Date()}`,
        favorite: false,
        image: undefined,
        time: '00:30' // time to complete the task
    },
    {
        id: 2,
        title: 'New Task 3',
        description: 'New Task 3 Description',
        completed: true,
        archived: false,
        color: '#2a2a2a',
        pin: false, // fijar las tareas
        date:`${new Date()}`,
        favorite: false,
        image: undefined,
        time: '00:30' // time to complete the task
    },
    {
        id: 3,
        title: 'New Task 1',
        description: 'New Task 1 Description',
        completed: true,
        archived: false,
        color: '#2a2a2a',
        pin: false, // fijar las tareas
        date: `${new Date()}`,
        favorite: false,
        image: undefined,
        time: '00:30' // time to complete the task
    },
    {
        id: 4,
        title: 'New Task 2',
        description: 'New Task 2 Description',
        completed: true,
        archived: false,
        color: '#2a2a2a',
        pin: false, // fijar las tareas
        date: `${new Date()}`,
        favorite: false,
        image: undefined,
        time: '00:30' // time to complete the task
    },
    {
        id: 5,
        title: 'New Task 3',
        description: 'New Task 3 Description',
        completed: true,
        archived: false,
        color: '#2a2a2a',
        pin: false, // fijar las tareas
        date: `${new Date()}`,
        favorite: false,
        image: undefined,
        time: '00:30' // time to complete the task
    }


]

export const todosReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TASK:
            return state.find(t => t.id === payload.id) ?
                [...state.slice(0, payload.id), { ...payload }, ...state.slice(payload.id + 1)]
                : [...state, { ...payload }];
        case DELETE_TASK:
            return state.filter(t => t.id !== payload.id);

        case COMPLETED_TASK:
            return state.map(t => t.id === payload.id ? ({ ...t, completed: !t.completed }) : t);
        default:
            return state;
    }
};