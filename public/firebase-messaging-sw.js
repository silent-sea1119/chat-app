/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-app.js');
importScripts(
  'https://www.gstatic.com/firebasejs/7.15.0/firebase-messaging.js'
);

firebase.initializeApp({
  apiKey: 'AIzaSyAKGRssxY4OW9um6RlSbbQ1Fh_lgdWfoPs',
  authDomain: 'chat-web-app-4ee4c.firebaseapp.com',
  databaseURL: 'https://chat-web-app-4ee4c.firebaseio.com',
  projectId: 'chat-web-app-4ee4c',
  storageBucket: 'chat-web-app-4ee4c.appspot.com',
  messagingSenderId: '167319830934',
  appId: '1:167319830934:web:419e220f9fdcd15ea25db7',
});

firebase.messaging();
