import { combineReducers } from "redux";
import movies from "./movies";

export const rootReducer = combineReducers({
    movies,
});


export type ApplicationState = ReturnType<typeof rootReducer>
