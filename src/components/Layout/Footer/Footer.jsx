import styled from 'styled-components';
import FooterLink from './FooterLink';
import github_img from '../../../assets/images/github.png';
import velog_img from '../../../assets/images/velog.png';
import { Logo } from '../Header/Header';

const FooterContainer = styled.div`
  width: 100%;
  height: 100px;
  border-top: 1px solid rgba(224, 224, 224, 1);
  left: 0;
  bottom: 0;
  background-color: white;
  margin-top: auto;
`;

const FooterContent = styled.div`
  width: 80%;
  height: 100%;

  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconWrapper = styled.div``;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Logo>VE</Logo>
        <IconWrapper>
          <FooterLink link={'https://github.com/moko0428'} img={github_img} />
          <FooterLink
            link={'https://velog.io/@moko0428/posts'}
            img={velog_img}
          />
        </IconWrapper>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
