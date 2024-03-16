import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Item = styled(NavLink)`
  cursor: pointer;
  text-decoration: none;
  margin: 0px 10px;
`;

const HeaderMenuItem = (props) => {
  return (
    <Item
      to={props.link}
      style={({ isActive }) => {
        return { color: isActive ? '#44ABEF' : 'black' };
      }}
    >
      {props.text}
    </Item>
  );
};

export default HeaderMenuItem;
