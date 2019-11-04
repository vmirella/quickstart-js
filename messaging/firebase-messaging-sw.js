// // Import and configure the Firebase SDK
// // These scripts are made available when the app is served or deployed on Firebase Hosting
// // If you do not serve/host your project using Firebase Hosting see https://firebase.google.com/docs/web/setup
// // importScripts('/__/firebase/6.3.4/firebase-app.js');
// // importScripts('/__/firebase/6.3.4/firebase-messaging.js');
// // importScripts('/__/firebase/init.js');

// importScripts('https://www.gstatic.com/firebasejs/7.2.3/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/7.2.3/firebase-messaging.js');

// // import * as firebase from "firebase/app";

// const messaging = firebase.messaging();

// // Get Instance ID token. Initially this makes a network call, once retrieved
// // subsequent calls to getToken will return from cache.
// messaging.getToken().then((currentToken) => {
//   if (currentToken) {
//     sendTokenToServer(currentToken);
//     updateUIForPushEnabled(currentToken);
//   } else {
//     // Show permission request.
//     console.log('No Instance ID token available. Request permission to generate one.');
//     // Show permission UI.
//     updateUIForPushPermissionRequired();
//     setTokenSentToServer(false);
//   }
// }).catch((err) => {
//   console.log('An error occurred while retrieving token. ', err);
//   showToken('Error retrieving Instance ID token. ', err);
//   setTokenSentToServer(false);
// })


// // Callback fired if Instance ID token is updated.
// messaging.onTokenRefresh(() => {
//   messaging.getToken().then((refreshedToken) => {
//     console.log('Token refreshed.');
//     // Indicate that the new Instance ID token has not yet been sent to the
//     // app server.
//     setTokenSentToServer(false);
//     // Send Instance ID token to app server.
//     sendTokenToServer(refreshedToken);
//     // ...
//   }).catch((err) => {
//     console.log('Unable to retrieve refreshed token ', err);
//     showToken('Unable to retrieve refreshed token ', err);
//   });
// });
// // firebase.initializeApp({
// //   'messagingSenderId': '335455656441'
// // });
// /**
//  * Here is is the code snippet to initialize Firebase Messaging in the Service
//  * Worker when your app is not hosted on Firebase Hosting.

//  // [START initialize_firebase_in_sw]
//  // Give the service worker access to Firebase Messaging.
//  // Note that you can only use Firebase Messaging here, other Firebase libraries
//  // are not available in the service worker.
//  importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-app.js');
//  importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-messaging.js');

//  // Initialize the Firebase app in the service worker by passing in the
//  // messagingSenderId.
//  firebase.initializeApp({
//    'messagingSenderId': 'YOUR-SENDER-ID'
//  });

//  // Retrieve an instance of Firebase Messaging so that it can handle background
//  // messages.
//  const messaging = firebase.messaging();
//  // [END initialize_firebase_in_sw]
//  **/


// // If you would like to customize notifications that are received in the
// // background (Web app is closed or not in browser focus) then you should
// // implement this optional method.
// // [START background_handler]
// messaging.setBackgroundMessageHandler(function(payload) {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);
//   // Customize notification here
//   const notificationTitle = 'Background Message Title';
//   const notificationOptions = {
//     body: 'Background Message body.',
//     icon: '/firebase-logo.png'
//   };

//   return self.registration.showNotification(notificationTitle,
//     notificationOptions);
// });
// // [END background_handler]
