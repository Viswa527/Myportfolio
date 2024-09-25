import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA7_tw4wiUEuCNVV_ye4wt_TrJ055MWOls",
  authDomain: "viswa-portfolio-ef139.firebaseapp.com",
  projectId: "viswa-portfolio-ef139",
  storageBucket: "viswa-portfolio-ef139.appspot.com",
  messagingSenderId: "633243846590",
  appId: "1:633243846590:web:80f8c2586bb663a421dbef",
  measurementId: "G-QQF9060T84"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);