import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { AplicationState } from '../../../store';
import { UserState } from '../../../store/ducks/User/types';
import Header from '../../../components/header';

const Main: React.FC = () => {
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const userRepository: UserState = (
    useSelector<AplicationState>((state) => state.user) as UserState);

  return (
    <>
      { !userRepository.data.token && <Redirect to="/login" /> }
      <Header handlerMenu={() => setMenuActive(!menuActive)} />
    </>
  );
};

export default Main;
