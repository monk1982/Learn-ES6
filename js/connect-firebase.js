// Set the configuration for your app  
  var config = {
    databaseURL: "https://intense-torch-7295.firebaseio.com",    
  };
  firebase.initializeApp(config);
  var email = 'thuyto@tricao.com';
  var password = '12';

// Signin with email and pass
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
      console.log ('In Err:'+errorMessage)    
  });

// Get a reference to the database service
  var database = firebase.database();

// Signout
  firebase.auth().signOut().then(function() {
    console.log('Sign out');
  }, function(error) {
    console.log ('Out Err:'+error.message)    
  });
