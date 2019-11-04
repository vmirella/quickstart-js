var firebaseConfig = {
    apiKey: "AIzaSyAWwiBNw9Y-5T94MdHPeEF822MTVcqailI",
    authDomain: "pruebita-fmc.firebaseapp.com",
    databaseURL: "https://pruebita-fmc.firebaseio.com",
    projectId: "pruebita-fmc",
    storageBucket: "pruebita-fmc.appspot.com",
    messagingSenderId: "335455656441",
    appId: "1:335455656441:web:547c4cc90f252c1ee08528",
    measurementId: "G-G35GD8XCGS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  //Mensaje
  const messaging = firebase.messaging();

  messaging.requestPermission()
  .then(function(){
    console.log('tiene permisos');
    console.log('tiene permisosa', messaging.getToken());
    return messaging.getToken();
  })
  .catch(function(err){
    console.log('error');
  });