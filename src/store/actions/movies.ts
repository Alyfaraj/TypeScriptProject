import { axiosApi } from "../../api";
import { Movie } from "../../models";
import { LOADING_MOVIES, SET_MOVIES } from "./types";

export const getMovies = (page?: number) => {
  return (dispatch: any) => {
    dispatch({ type: LOADING_MOVIES, payload: true });
    axiosApi
      .get(`/popular?api_key=9538bafb994ca8280e9ac8036cab012e&page=${page}`)
      .then(respose => {
        console.log(respose.data.results[0]);
        dispatch({ type: SET_MOVIES, payload: respose.data.results, page });
        dispatch({ type: LOADING_MOVIES, payload: false });
      })
      .catch(err => console.log(err));
  };
};
