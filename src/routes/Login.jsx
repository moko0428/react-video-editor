import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import {
  Content,
  Error,
  Form,
  Input,
  Switcher,
  Title,
  Wrapper,
  errors,
} from './CreateAccount';
import { auth } from '../firebase';

const CreateAccount = () => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;

    if (name === 'email') setEmail(value);
    else if (name === 'password') setPassword(value);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (isLoading || email === '' || password === '') return;
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);

      navigate('/', { replace: true });
    } catch (e) {
      setError(errors[e.code]);
      console.log('code', e.code);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Wrapper>
      <Content>
        <Title>로그인</Title>
        <Form onSubmit={onSubmit}>
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
            value={isLoading ? '정보를 불러오는 중 ...' : '로그인하기'}
          />
        </Form>
        {error !== '' ? <Error>{error}</Error> : null}
        <Switcher>
          아이디가 없으신가요? <Link to={'/create-account'}>회원가입</Link>
        </Switcher>
      </Content>
    </Wrapper>
  );
};

export default CreateAccount;
