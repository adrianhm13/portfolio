import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCD1gyQ-6COnrXJIGcgFh_yfZ8o5KVcKOY",
    authDomain: "portfolio-201d7.firebaseapp.com",
    projectId: "portfolio-201d7",
    storageBucket: "portfolio-201d7.appspot.com",
    messagingSenderId: "841300445962",
    appId: "1:841300445962:web:d061a6fee35f73129e08f3",
    measurementId: "G-PEL42PYQW8"
  };

  //Init firebase

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app)