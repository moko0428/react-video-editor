import { useState } from 'react';
import { IoMenu } from 'react-icons/io5';

import styled from 'styled-components';
import HeaderDropdown from './HeaderDropdown';

const Wrapper = styled.div``;
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;
  border-radius: 8px;

  &:hover,
  &:active {
    background-color: rgba(224, 224, 224, 0.8);
    transition: background-color 0.8s;
  }
`;

const SmallMenuIcon = () => {
  const [toggle, setToggle] = useState(false);
  const onClick = () => {
    setToggle(!toggle);
  };
  return (
    <Wrapper>
      <Icon onClick={onClick}>
        <IoMenu size={30} />
      </Icon>
      {toggle && <HeaderDropdown />}
    </Wrapper>
  );
};

export default SmallMenuIcon;
