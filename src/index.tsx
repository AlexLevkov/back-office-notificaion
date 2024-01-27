import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { getMessaging, getToken,onMessage } from "firebase/messaging";


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./firebase-messaging-sw.js')
    .then(function(registration) {
      console.log('Registration successful, scope is:', registration.scope);
    }).catch(function(err) {
      console.log('Service worker registration failed, error:', err);
    });
}

const messaging = getMessaging();

Notification.requestPermission().then((permission) => {
  if (permission === "granted") {
    console.log("Notification permission granted.");
    // Get the token
    getToken(messaging).then((currentToken) => {
      if (currentToken) {
        console.log("Token: ", currentToken);
      } else {
        console.log("No registration token available. Request permission to generate one.");
      }
    });
  } else {
    console.log("Unable to get permission to notify.");
  }
}).catch((err) => {
  console.log("An error occurred while retrieving token. ", err);
});

onMessage(messaging, (payload) => {
  console.log("Message received. ", payload);
  // Customize notification handling here
});

// 

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
