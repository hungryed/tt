import React from 'react';
import { Provider } from 'react-redux';
import store from '../utils/redux/store';
import ActualApp from './ActualApp';

function App() {
  return (
    <Provider store={store}>
      <ActualApp />
    </Provider>
  );
}

export default App;
