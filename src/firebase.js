import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAvWBEQBXb5QPgDFYo7dOnQAKOUifX7-jg',
  authDomain: 'video-editor-65d58.firebaseapp.com',
  projectId: 'video-editor-65d58',
  storageBucket: 'video-editor-65d58.appspot.com',
  messagingSenderId: '244415327945',
  appId: '1:244415327945:web:fcfe424cac87027870a718',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
