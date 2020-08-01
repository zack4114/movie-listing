export const SET_MOVIES_DATA = Symbol('SET_MOVIES_DATA');
export function setMoviesData(data) {
  return {
    type: SET_MOVIES_DATA,
    data,
  };
}

export const SET_LOCAL_MOVIE_LIST_DATA = Symbol('SET_LOCAL_MOVIE_LIST_DATA');
export function setLocalMovieListData(data) {
  return {
    type: SET_LOCAL_MOVIE_LIST_DATA,
    data,
  };
}
