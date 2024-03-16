import styled from 'styled-components';
import SelectedVideo from '../components/VideoEditor/SelectedVideo';
import { useRef, useState } from 'react';
import useDeviceType from '../hooks/useDeviceType';
const Container = styled.div`
  width: ${(props) => props.width};
  height: inherit;
  padding-right: 40px;
  display: flex;
  flex-direction: column;
`;
const Content = styled.article``;
const VideoReloadWrapper = styled.div`
  width: inherit;
  height: 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: normal;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 800;
  line-height: normal;
  padding-top: 10px;
`;

const Section = styled.section`
  width: 100%;
  margin-top: 30px;
  margin-bottom: 62px;
  display: flex;
  justify-content: 'center';
`;
const Img = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px dashed rgba(1, 1, 1, 0.2);
`;

const ImageEditor = () => {
  const device = useDeviceType();

  return (
    <Container width={device === 'small-screen' ? '100%' : '50%'}>
      <VideoReloadWrapper>
        <Title>이미지 편집하기</Title>
        <SelectedVideo text={'이미지 다시 선택'} />
      </VideoReloadWrapper>
    </Container>
  );
};

export default ImageEditor;
