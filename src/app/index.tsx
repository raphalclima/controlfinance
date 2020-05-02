import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from '../store';
import GlobalStyle from './styles/global';
import Routes from '../routes';

// window.addEventListener('beforeunload', () => localStorage.removeItem('@finance-map/user'));
const App: React.FC = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <div className="App">
        <GlobalStyle />
        <Routes />
      </div>
    </PersistGate>
  </Provider>
);
export default App;
