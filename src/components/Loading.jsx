import styled from 'styled-components';

const Load = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.2);
  font-size: 60px;
`;

const Loading = () => {
  return <Load>정보를 불러오는 중 ...</Load>;
};

export default Loading;
