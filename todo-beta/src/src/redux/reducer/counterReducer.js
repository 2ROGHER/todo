import { INCREMENT } from "../action-types";

const initialState = {
    count: 0
};

export const counterReducer = (state = initialState, { type, payload}) => {
    switch(type) {
        case INCREMENT: 
            return {
                ...state, 
                count: payload + 1,
            }
        default: 
            return state;
    }
};