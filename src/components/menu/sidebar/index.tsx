import React, { useState } from 'react';

import { Container, MenuItemList, Separator } from './styles';

import MenuItem from '../menuItem';
import Logo from '../logo';

import { FinanceControl, Dashboard, Settings } from '../../../assets';

const SideBar : React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string>('');
  const [expandMenu, setExpandMenu] = useState<boolean>(false);

  return (
    <Container
      expandMenu={expandMenu}
      onMouseEnter={() => setExpandMenu(!expandMenu)}
      onMouseLeave={() => setExpandMenu(!expandMenu)}
    >
      <Logo expand={expandMenu} />
      <MenuItemList>
        <MenuItem
          title="Dashboard"
          Icon={Dashboard}
          active={selectedItem === 'Dashboard'}
          expandMenu={expandMenu}
          handlerClick={() => setSelectedItem('Dashboard')}
        />
        <MenuItem
          title="Controle Financeiro"
          Icon={Settings}
          active={selectedItem === 'Controle Financeiro'}
          expandMenu={expandMenu}
          handlerClick={() => setSelectedItem('Controle Financeiro')}
        />
        <Separator />
        <MenuItem
          title="Configurações"
          Icon={FinanceControl}
          active={selectedItem === 'Configurações'}
          expandMenu={expandMenu}
          handlerClick={() => setSelectedItem('Configurações')}
        />
      </MenuItemList>
    </Container>
  );
};

export default SideBar;
