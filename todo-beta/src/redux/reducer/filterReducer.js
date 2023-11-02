import { FILTER_TASKS } from "../action-types";

// Let's define initial state of the reducer fuction.
const initialState = 'SHOW_ALL';

export const filterReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case FILTER_TASKS: 
            return payload.filter;
        default: 
            return state;
    }
};