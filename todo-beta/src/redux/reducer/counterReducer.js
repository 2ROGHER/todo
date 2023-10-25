import { INCREMENT } from "../action-types";

// Let's set the initial state of the reducer to managnmente the global state.
const initialState = {
    count: 1
};

/**
 * 
 * @param {object} state - returns the state object to update the view.
 * @param {*} param1 
 * @returns 
 */
export const counterReducer = (state = initialState, { type, payload}) => {
    switch(type) {
        case INCREMENT: 
            return {
                ...state, 
                count: state.count + payload,
            }
        default: 
            return state;
    }
};