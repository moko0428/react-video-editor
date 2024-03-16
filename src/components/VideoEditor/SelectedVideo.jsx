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

  background-color: var(--main);
  color: white;

  font-size: 16px;
  font-weight: 700;

  &:hover,
  &:focus,
  &:active {
    background-color: var(--black);
    border: none;
  }
`;

const SelectedVideo = ({ file, text, setFile }) => {
  return (
    <Container>
      <Input
        type="file"
        accept="video/*"
        ref={file}
        onChange={(e) => {
          setFile(e.target.files[0]);
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
