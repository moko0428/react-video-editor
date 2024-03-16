import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import HeaderMenuItem from './HeaderMenuItem';
import useDeviceType from '../../../hooks/useDeviceType';
import HeaderDropdown from './HeaderDropdown';
import SmallMenuIcon from './\bSmallMenuIcon';

const HeaderContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;

  width: 100%;
  height: 64px;
  gap: 8px;

  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgba(224, 224, 224, 1);
  background-color: white;
`;

const HeaderContent = styled.div`
  width: 80%;
  height: 100%;

  margin: 0 auto;
  padding: 12px 0px 0px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.span`
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 40px;
  padding-bottom: 10px;
`;

const Nav = styled.div``;

const MenuList = styled.ul`
  display: flex;
`;

const DropMenu = styled.div``;

const Header = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const device = useDeviceType();

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo onClick={() => navigate('/', { replace: true })}>VE</Logo>
        <Nav>
          <MenuList>
            <HeaderMenuItem link={'/'} text={'비디오 편집'} />
            <HeaderMenuItem link={'/image'} text={'이미지 편집'} />
            <HeaderMenuItem link={'/login'} text={'로그아웃'} />
          </MenuList>
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
