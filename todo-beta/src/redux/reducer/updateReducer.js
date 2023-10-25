import { UPDATE_TASK } from "../action-types";

const initialState = [];

export const updateReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case UPDATE_TASK:
            return [
                { ...payload }
            ];
        default:
            return state;
    }
}