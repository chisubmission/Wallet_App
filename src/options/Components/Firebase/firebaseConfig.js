import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDHr9rD6rxOGtSs8SVB55U-0t0AlmMyFq8",
  authDomain: "walleto-51908.firebaseapp.com",
  projectId: "walleto-51908",
  storageBucket: "walleto-51908.appspot.com",
  messagingSenderId: "603902950496",
  appId: "1:603902950496:web:1d3dee9b28d6fd5162d705"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);