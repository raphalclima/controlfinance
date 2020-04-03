import React from 'react';

import GlobalStyle from './styles/global';
import Routes from '../routes';

// window.addEventListener('beforeunload', () => localStorage.removeItem('@finance-map/user'));
const App: React.FC = () => (
  <div className="App">
    <GlobalStyle />
    <Routes />
  </div>
);
export default App;
