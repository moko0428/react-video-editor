import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import VideoEditor from './routes/VideoEditor';
import Login from './routes/Login';
import CreateAccount from './routes/CreateAccount';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { useEffect, useState } from 'react';
import { auth } from './firebase';
import Loading from './components/Loading';
import ProtectedRoute from './components/Protected-route';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '',
        element: <VideoEditor />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: 'create-account',
    element: <CreateAccount />,
  },
]);

const GlobalStyles = createGlobalStyle`
  ${reset}
  body{
    background-color: aliceblue;
  }
`;
function App() {
  const [isLoading, setLoading] = useState(true);
  const init = async () => {
    await auth.authStateReady();
    setLoading(false);
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <>
      <GlobalStyles />
      {isLoading ? <Loading /> : <RouterProvider router={router} />}
    </>
  );
}

export default App;