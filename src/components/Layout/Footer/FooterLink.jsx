import styled from 'styled-components';

const ImgLink = styled.a`
  color: black;
  text-decoration-line: none;
  margin-left: 5px;
  margin-right: 5px;
`;

const Img = styled.img`
  width: 20px;
`;

const FooterLink = (props) => {
  return (
    <ImgLink href={props.link} target="_blank">
      <Img src={props.img} alt="이미지" />
    </ImgLink>
  );
};

export default FooterLink;
