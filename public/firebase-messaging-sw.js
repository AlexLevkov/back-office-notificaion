importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyABq7a5PVwU1u9PI3CXFZTMQMX3CFekqPY",
  authDomain: "silent-push-notification-01-24.firebaseapp.com",
  projectId: "silent-push-notification-01-24",
  storageBucket: "silent-push-notification-01-24.appspot.com",
  messagingSenderId: "611586273338",
  appId: "1:611586273338:web:e9467e97273f8c10858503",
  measurementId: "G-TBLWXR3T7D",
});
const messaging = firebase.messaging();
