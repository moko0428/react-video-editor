import styled from 'styled-components';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MainContent = styled.div`
  width: 100%;

  padding-top: 80px;
  padding-left: 56px;
  padding-bottom: 56px;
  padding-bottom: 16px;

  min-height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  background-color: aliceblue;
`;

const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <MainContent></MainContent>
      <Footer />
    </Wrapper>
  );
};
export default Layout;
