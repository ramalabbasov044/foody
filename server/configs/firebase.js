import { initializeApp } from "firebase/app";
import { getStorage  } from "firebase/storage";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCM13Y5kLvUbC_g3dYYBiMfON691QJTRrc",
  authDomain: "foody3-2f02f.firebaseapp.com",
  projectId: "foody3-2f02f",
  storageBucket: "foody3-2f02f.appspot.com",
  messagingSenderId: "757827585538",
  appId: "1:757827585538:web:e0443568ca8e659f37091b"
};

const app = initializeApp(firebaseConfig);


export const fileStorage = getStorage(app);
export const db = getFirestore(app);