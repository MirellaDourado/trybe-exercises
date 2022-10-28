import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { combineReducers, legacy_createStore as createStore } from 'redux';
import clickReducer from '../reducers';

const renderWithRedux = (
  component,
  {
    initialState,
    store = createStore(combineReducers({ clickReducer }), initialState),
  } = {}
) => ({
  ...render(<Provider store={store}>{component}</Provider>),
  store,
});

export default renderWithRedux;