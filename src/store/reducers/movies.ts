import { Movie } from "../../models";
import { LOADING_MOVIES, SET_MOVIES } from "../actions/types";



interface initStateType {
    movies: Movie[],
    loading: boolean
}

const initState: initStateType = {
    movies: [],
    loading: false
}


export default (state = initState, action: any) => {

    switch (action.type) {
        case SET_MOVIES:
            return {
                ...state,
                movies: action.page == 1 ? action.payload : [...state.movies, ...action.payload]
            }
        case LOADING_MOVIES:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state
    }

}