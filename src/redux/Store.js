import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import CategoriesReducer from './reducers/CategoriesReducer';

const store = createStore(CategoriesReducer, applyMiddleware(thunk));

export default store;
