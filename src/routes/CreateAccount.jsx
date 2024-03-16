import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { auth } from '../firebase';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: 520px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 30px;
`;

export const Title = styled.h1`
  font-size: 42px;
  font-weight: bold;
`;

export const Form = styled.form`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const Input = styled.input`
  padding: 10px 20px;
  border-radius: 50px;
  border: none;
  width: 100%;
  font-size: 16px;

  &[type='submit'] {
    cursor: pointer;
    background-color: var(--main);
    color: white;

    &:hover {
      background-color: var(--black);
    }
  }
`;

export const Error = styled.span`
  font-weight: 600;
  color: red;
  text-align: center;
  margin-top: 10px;
`;

export const Switcher = styled.span`
  margin-top: 20px;
`;

export const errors = {
  'auth/email-already-in-use': '이미 존재하는 이메일입니다.',
  'auth/weak-password': '비밀번호를 다시 입력해주세요.',
  'auth/invalid-login-credential': '이메일 또는 비밀번호를 다시 확인하세요.',
  'auth/popup-closed-by-user': '예기치 않은 오류입니다. 다시 로그인 해주세요.',
};

const CreateAccount = () => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === 'name') setName(value);
    else if (name === 'email') setEmail(value);
    else if (name === 'password') setPassword(value);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (isLoading || name === '' || email === '' || password === '') return;
    try {
      setLoading(true);
      const credentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(credentials.user, {
        displayName: name,
      });
      navigate('/', { replace: true });
    } catch (e) {
      setError(errors[e.code]);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Wrapper>
      <Content>
        <Title>회원가입</Title>
        <Form onSubmit={onSubmit}>
          <Input
            onChange={onChange}
            name="name"
            value={name}
            placeholder="이름을 입력해주세요."
            type="text"
            required
          />
          <Input
            onChange={onChange}
            name="email"
            value={email}
            placeholder="이메일을 입력해주세요."
            type="email"
            required
          />
          <Input
            onChange={onChange}
            name="password"
            value={password}
            placeholder="비밀번호를 입력해주세요."
            type="password"
            required
          />
          <Input
            type="submit"
            value={isLoading ? '정보를 불러오는 중...' : '회원가입하기'}
          />
        </Form>
        {error !== '' ? <Error>{error}</Error> : null}

        <Switcher>
          아이디가 있으신가요? <Link to={'/login'}>로그인</Link>
        </Switcher>
      </Content>
    </Wrapper>
  );
};

export default CreateAccount;
