import { combineReducers, legacy_createStore as createStore } from 'redux';
import clickReducer from '../reducers';

const rootReducer = combineReducers({ clickReducer });

const store = createStore(rootReducer);

export default store;