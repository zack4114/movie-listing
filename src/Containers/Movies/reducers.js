import {SET_MOVIES_DATA, SET_LOCAL_MOVIE_LIST_DATA} from './actions';
const {DUMMY_DATA} = require('../../Constants');

const initialState = {
  movieListData: [],
  localMovieListData: [],
};

const moviesTabReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES_DATA:
      return {...state, movieListData: action.data};
    case SET_LOCAL_MOVIE_LIST_DATA: {
      return {...state, localMovieListData: action.data};
    }
    default:
      return state;
  }
};

export default moviesTabReducer;
