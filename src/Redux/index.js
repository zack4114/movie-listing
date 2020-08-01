import {createStore, combineReducers} from 'redux';
import moviesTabReducer from '../Containers/Movies/reducers';

const reducers = combineReducers({
  moviesTabReducer,
});

const store = createStore(reducers);

export default store;
