import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import Header from '../../../components/header';

const Main: React.FC = () => {
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const user = localStorage.getItem('@finance-map/user');
  const logged = !!user;

  return (
    <>
      { !logged && <Redirect to="/login" /> }
      <Header handlerMenu={() => setMenuActive(!menuActive)} />
    </>
  );
};

export default Main;
