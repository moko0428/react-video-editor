import styled from 'styled-components';
import SelectedVideo from '../components/VideoEditor/SelectedVideo';
import { useEffect, useRef, useState } from 'react';
import MultiRangeSlider from '../components/VideoEditor/MultiRangeSlider';
import VideoConversionButton from '../components/VideoEditor/VideoConversionButton';
import { createFFmpeg } from '@ffmpeg/ffmpeg';
import { sliderValueToVideoTime } from '../utils/utils';
import { VideoPlayer } from '../components/VideoEditor/VideoPlayer';
import useDeviceType from '../hooks/useDeviceType';
import { Modal, Spinner, Toast, ToastContainer } from 'react-bootstrap';

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
const Column = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const HideWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
`;

const ModalWrapper = styled.div`
  text-align: center;
`;

const ModalP = styled.p`
  margin-top: 16px;
  font-size: 14px;
  font-weight: 600;
  color: #c8c8c8;
`;
const ffmpeg = createFFmpeg({ log: true });

const VideoEditor = (props) => {
  const [videoFile, setVideoFile] = useState();
  const [ffmpegLoaded, setFFmpegLoaded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [videoPlayerState, setVideoPlayerState] = useState();
  const [videoPlayer, setVideoPlayer] = useState();
  const [sliderValues, setSliderValues] = useState([0, 100]);
  const [show, setShow] = useState(false);
  const device = useDeviceType();
  const uploadFile = useRef('');
  useEffect(() => {
    const title = document.getElementsByTagName('title')[0];
    title.innerHTML = 'VE | Video Edit';
  }, []);

  useEffect(() => {
    if (!ffmpeg.isLoaded()) {
      ffmpeg.load().then(() => {
        setFFmpegLoaded(true);
      });
    } else {
      setFFmpegLoaded(true);
    }
  }, []);

  useEffect(() => {
    const min = sliderValues[0];

    if (min !== undefined && videoPlayerState && videoPlayer) {
      videoPlayer.seek(sliderValueToVideoTime(videoPlayerState.duration, min));
    }
  }, [sliderValues]);

  useEffect(() => {
    if (videoPlayer && videoPlayerState) {
      const [min, max] = sliderValues;

      const minTime = sliderValueToVideoTime(videoPlayerState.duration, min);
      const maxTime = sliderValueToVideoTime(videoPlayerState.duration, max);

      if (videoPlayerState.currentTime < minTime) {
        videoPlayer.seek(minTime);
      }
      if (videoPlayerState.currentTime > maxTime) {
        videoPlayer.seek(minTime);
      }
    }
  }, [videoPlayerState]);

  useEffect(() => {
    if (!videoFile) {
      setVideoPlayerState(undefined);
    }
    setSliderValues([0, 100]);
  }, [videoFile]);

  if (!ffmpegLoaded) return <div>정보를 불러오는 중...</div>;

  return (
    <>
      <Container width={device === 'small-screen' ? '100%' : '50%'}>
        <Content>
          <VideoReloadWrapper>
            <Title>비디오 편집하기</Title>
            {videoFile && (
              <SelectedVideo
                file={uploadFile}
                setFile={setVideoFile}
                text={'비디오 다시 선택'}
              />
            )}
          </VideoReloadWrapper>
          <Section>
            <Column>
              {videoFile ? (
                <VideoPlayer
                  src={videoFile}
                  onPlayerChange={(videoPlayer) => {
                    setVideoPlayer(videoPlayer);
                  }}
                  onChange={(videoPlayerState) => {
                    setVideoPlayerState(videoPlayerState);
                  }}
                />
              ) : (
                <Img>비디오를 업로드해주세요.</Img>
              )}
              {videoFile ? (
                ''
              ) : (
                <SelectedVideo
                  file={uploadFile}
                  setFile={setVideoFile}
                  text={'비디오 업로드'}
                />
              )}
            </Column>
          </Section>

          <section>
            {videoFile && (
              <>
                <Section>
                  <MultiRangeSlider
                    onSliderChange={([min, max]) => setSliderValues([min, max])}
                  />
                </Section>
                <HideWrapper
                  direction={device === 'small-screen' ? 'column' : 'row'}
                >
                  <VideoConversionButton />
                </HideWrapper>
              </>
            )}
          </section>
        </Content>
      </Container>
      <ToastContainer
        className="p-3"
        position={'top-center'}
        style={{ zIndex: 1 }}
      >
        <Toast
          onClose={() => setShow(false)}
          show={show}
          delay={2000}
          bg="dark"
          autohide
        >
          <Toast.Header closeButton={false}>
            <strong className="me-auto">Video Editor</strong>
          </Toast.Header>
          <Toast.Body>내보내기가 완료되었습니다.</Toast.Body>
        </Toast>
      </ToastContainer>

      <Modal
        show={processing}
        onHide={() => setProcessing(false)}
        backdrop={false}
        keyboard={false}
        centered
        size="sm"
      >
        <ModalWrapper>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>

          <ModalP>내보내기가 진행중입니다.</ModalP>
        </ModalWrapper>
      </Modal>
    </>
  );
};

export default VideoEditor;
