import styled from 'styled-components';

const Container = styled.div`
  margin-top: 20px;
`;

const Input = styled.input`
  display: none;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  border-radius: 8px;

  padding: 16px 8px;
  line-height: normal;
  text-align: center;

  background-color: #44abef;
  color: white;

  font-size: 16px;
  font-weight: 700;

  &:hover,
  &:focus,
  &:active {
    background-color: #383838;
    border: none;
  }
`;

const SelectedVideo = ({ file, text, setVideoFile }) => {
  return (
    <Container>
      <Input
        type="file"
        accept="video/*"
        ref={file}
        onChange={(e) => {
          setVideoFile(e.target.files[0]);
        }}
      />
      <Button
        onClick={() => {
          file.current.click();
        }}
      >
        {text}
      </Button>
    </Container>
  );
};

export default SelectedVideo;
