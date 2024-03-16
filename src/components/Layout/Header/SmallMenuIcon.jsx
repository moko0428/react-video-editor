import { IoMenu } from 'react-icons/io5';
import styled from 'styled-components';

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  padding: 20px 30px;

  &:hover,
  &:active {
    background-color: rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s;
  }
`;

const SmallMenuIcon = () => {
  return (
    <Icon>
      <IoMenu />
    </Icon>
  );
};

export default SmallMenuIcon;
