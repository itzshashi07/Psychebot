
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyDtUKJFPF7ITadjXfVSwRVv75bPuif2ZGI",
  authDomain: "pychebot.firebaseapp.com",
  projectId: "pychebot",
  storageBucket: "pychebot.appspot.com",
  messagingSenderId: "346876087915",
  appId: "1:346876087915:web:5fa474ee8d4cf738ffab2e",
  databaseURL: 'https://pychebot-default-rtdb.firebaseio.com/',
  measurementId: "G-XNHV32QHPG"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
export const analytics = getAnalytics(app);
const storage = getStorage(app);


export { storage };