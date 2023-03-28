import React from 'react';
import {Routes} from './navigator';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store from './store/store';
import {persistStore} from 'redux-persist';

function App() {
  let persist = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist}>
        <Routes />
      </PersistGate>
    </Provider>
  );
}

export default App;
