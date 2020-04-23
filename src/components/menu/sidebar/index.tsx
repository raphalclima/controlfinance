import React, {
  useState, useRef, useCallback, useEffect,
} from 'react';

import MenuItem from '../menuItem';
import Logo from '../logo';
import { FinanceControl, Dashboard, Settings } from '../../../assets';
import { Container, MenuItemList } from './styles';

interface Props {
  activeMenu: boolean;
  handleVisible(): void;
}

const SideBar : React.FC<Props> = (props) => {
  const ref = useRef(null);
  const [selectedItem, setSelectedItem] = useState<string>('');

  const escapeListener = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      if (props?.activeMenu) { props?.handleVisible(); }
    }
  }, [props]);

  const clickListener = useCallback(
    (e: MouseEvent) => {
      if (!(ref?.current! as any).contains(e.target)) {
        if (props?.activeMenu) { props?.handleVisible(); }
      }
    },
    [props],
  );

  useEffect(() => {
    document.addEventListener('click', clickListener);
    document.addEventListener('keyup', escapeListener);
    return () => {
      document.removeEventListener('click', clickListener);
      document.removeEventListener('keyup', escapeListener);
    };
  }, [clickListener, escapeListener]);

  return (
    <Container activeMenu={props?.activeMenu} ref={ref}>
      <Logo />
      <MenuItemList>
        <MenuItem
          title="Dashboard"
          route="/app/dashboard"
          Icon={Dashboard}
          active={selectedItem === 'Dashboard'}
          handlerClick={() => setSelectedItem('Dashboard')}
        />
        <MenuItem
          title="Finanças"
          route="/app/finances"
          Icon={FinanceControl}
          active={selectedItem === 'Finances'}
          handlerClick={() => setSelectedItem('Finances')}
        />
        <MenuItem
          title="Configuração"
          route="/app/finances"
          Icon={Settings}
          active={selectedItem === 'Settings'}
          handlerClick={() => setSelectedItem('Settings')}
        />
      </MenuItemList>
    </Container>
  );
};

export default SideBar;
