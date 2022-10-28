import React from 'react';
import { Provider } from 'react-redux';
import ButtonClicks from './ButtonClicks';
import NumberClicks from './NumberClicks';
import store from './store';

class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <ButtonClicks />
          <NumberClicks />
        </Provider>
      </div>
    );
  }
}
export default App;
