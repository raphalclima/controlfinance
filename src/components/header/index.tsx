import React, { useState } from 'react';

import {
  Container, Menu, Icons, Avatar, Separator,
} from './styles';

import { BellNews, Burger } from '../../assets';
import SideBar from '../menu/sidebar';

interface Props {
  handlerMenu(): void;
}

const Header : React.FC<Props> = (props) => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const handleClick = () => {
    setToggleMenu(!toggleMenu);
    setHandlerMenu();
  };

  const setHandlerMenu = () => props?.handlerMenu();

  return (
    <>
      <Container menuActive={toggleMenu}>
        <Menu>
          <Burger handleClick={() => handleClick()} />
        </Menu>
        <Icons>
          <BellNews />
          <Separator />
          <Avatar src="https://www.samservicos.com.br/wp-content/uploads/2019/02/user-sam.png" />
        </Icons>
      </Container>
      <SideBar activeMenu={toggleMenu} handleVisible={() => handleClick()} />
    </>
  );
};

export default Header;
