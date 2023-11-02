import { combineReducers } from "redux";
import { todosReducer } from "./todosReducer";
import { counterReducer } from "./counterReducer";
import { updateReducer } from "./updateReducer";
import { filterReducer } from "./filterReducer";

// Let's implements the "rootReducer"
export const rootReducer = combineReducers(
    {
        // Here goes all reducers objetcs to export the store function
        // The global state is `todosReducer`
        todosState: todosReducer,
        countState: counterReducer,
        updateState: updateReducer,
        filterState: filterReducer,
    }
)