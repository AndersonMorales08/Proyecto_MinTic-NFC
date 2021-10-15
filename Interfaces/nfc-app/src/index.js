import React from 'react';
import ReactDOM from 'react-dom';

// import './index.css';
import App from './App';
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// const firebaseConfig = {
//   apiKey: "AIzaSyC0dEwOi8S_S1IftZlbNwGxg2vHqFqlhaM",
//   authDomain: "nfc-motors.firebaseapp.com",
//   databaseURL: "https://nfc-motors-default-rtdb.firebaseio.com",
//   projectId: "nfc-motors",
//   storageBucket: "nfc-motors.appspot.com",
//   messagingSenderId: "442010999999",
//   appId: "1:442010999999:web:9bf1ba7cf10cad70907a0a",
//   measurementId: "G-JXQKV5W8KZ"
// };

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

