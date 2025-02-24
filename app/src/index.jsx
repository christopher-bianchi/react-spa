import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/analytics";

import App from "./app";

const firebaseConfig = {
  apiKey: "AIzaSyDQYWMCTaawlcgCU-ThFYYNGObgtXJdEhI",
  authDomain: "blackops-toolkit.firebaseapp.com",
  databaseURL: "https://blackops-toolkit.firebaseio.com",
  projectId: "blackops-toolkit",
  storageBucket: "blackops-toolkit.appspot.com",
  messagingSenderId: "585391986329",
  appId: "1:585391986329:web:bb08240e6de90d81cfca08",
  measurementId: "G-ENMQ48FD4D",
};
const app = firebase.initializeApp(firebaseConfig);
const analytics = app.analytics();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("app")
);

export default analytics;
