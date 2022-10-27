import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import dogReducer from './reducer/dogReducer';

const store = createStore(dogReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;