import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey:"AIzaSyBYI1XiTRJyfCtplrrSMighUxthiA_RmJ8",
  authDomain: "e-commerce-60ea5.firebaseapp.com",
  projectId: "e-commerce-60ea5",
  storageBucket: "e-commerce-60ea5.appspot.com",
  messagingSenderId: "906609675425",
  appId: "1:906609675425:web:6383290a98d8e1aef8f4e0"
};

const app = initializeApp(firebaseConfig);

const auth= getAuth(app);
const provider = new GoogleAuthProvider();


export {auth,provider};