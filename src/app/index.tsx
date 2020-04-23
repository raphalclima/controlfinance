import React from 'react';
import { Provider } from 'react-redux';

import store from '../store';
import GlobalStyle from './styles/global';
import Routes from '../routes';

// window.addEventListener('beforeunload', () => localStorage.removeItem('@finance-map/user'));
const App: React.FC = () => (
  <Provider store={store}>
    <div className="App">
      <GlobalStyle />
      <Routes />
    </div>
  </Provider>
);
export default App;
