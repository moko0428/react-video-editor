import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  background-color: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 9px;
  border-radius: 8px;
`;

const MenuItem = styled(NavLink)`
  cursor: pointer;
  text-decoration: none;
  margin: 10px;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 5px;
  width: 100px;
  display: flex;
  color: black;

  &:hover {
    background-color: var(--main);
  }
`;

const HeaderDropdown = () => {
  return (
    <Wrapper>
      <MenuItem to={'/'}>비디오 편집</MenuItem>
      <MenuItem to={'/image'}>이미지 편집</MenuItem>
      <MenuItem to={'/login'}>로그아웃</MenuItem>
    </Wrapper>
  );
};

export default HeaderDropdown;
