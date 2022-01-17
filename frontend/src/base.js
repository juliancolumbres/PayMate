import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { config } from './config/config';

const firebaseConfig = {
  apiKey: config.REACT_APP_FIREBASE_KEY,
  authDomain: config.REACT_APP_FIREBASE_DOMAIN,
  projectId: config.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: config.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: config.REACT_APP_FIREBASE_SENDER_ID,
  appId: config.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};
