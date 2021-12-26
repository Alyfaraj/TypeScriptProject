import axios from "axios";
export const axiosApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie"
});

export const axiosApiInstance = axios.create();

