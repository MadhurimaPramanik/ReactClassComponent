import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import UserReducer from './Users/UserReducer';
const store = createStore (UserReducer,applyMiddleware(thunk));
export default store;