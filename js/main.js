// Initializes Quiz.
function quiz() {
  this.checkSetup();  
  this.initFirebase();
  this.loadquests();
  //this.signIn();
  //this.signOut();
}

// Sets up shortcuts to Firebase features and initiate firebase auth.
quiz.prototype.initFirebase = function() {
  // Shortcuts to Firebase SDK features.
  this.auth = firebase.auth();
  this.database = firebase.database();
  this.storage = firebase.storage();
  // Initiates Firebase auth and listen to auth state changes.
  this.auth.onAuthStateChanged(this.onAuthStateChanged.bind(this));
};

// Loads questions and listens for upcoming ones.
quiz.prototype.loadquests = function() {
  // Reference to the /quests/ database path.
  this.questsRef = this.database.ref('quests');
  // Make sure we remove all previous listeners.
  this.questsRef.off();

  // Loads the last 12 quests and listen for new ones.
  var setQuests = function(data) {
    var val = data.val();
    console.log(val)
    //this.displayQuests(data.key, val.name, val.text, val.photoUrl, val.imageUrl);
  }.bind(this);
  
  //this.messagesRef.limitToLast(12).on('child_added', setMessage);
  //this.messagesRef.limitToLast(12).on('child_changed', setMessage);
};

// Signs-in Firebase.
quiz.prototype.signIn = function() {
  // Sign in Firebase using popup auth and Google as the identity provider.
  var provider = new firebase.auth.GithubAuthProvider();
  this.auth.signInWithPopup(provider).then(function(result) {
    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    var token = result.credential.accessToken;    
    var user = result.user;
    console.log('User='+user);    
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;    
    var email = error.email;    
    var credential = error.credential;
    console.log('Err='+errorMessage);
  });
};

// Signs-out of Firebase.
quiz.prototype.signOut = function() {
  // Sign out of Firebase.
  this.auth.signOut();
  console.log('Sign Out')
};

// Triggers when the auth state change for instance when the user signs-in or signs-out.
quiz.prototype.onAuthStateChanged = function(user) {
  if (user) { // User is signed in!
    // Get profile pic and user's name from the Firebase user object.
    var profilePicUrl = user.photoURL; // Only change these two lines!
    var userName = user.displayName;   // Only change these two lines!
    console.log(user.displayName);
  }
};
  
// Returns true if user is signed-in. Otherwise false and displays a message.
quiz.prototype.checkSignedInWithMessage = function() {
  // Return true if the user is signed in Firebase
  if (this.auth.currentUser) {
    return true;
  }
};

// Checks that the Firebase SDK has been correctly setup and configured.
quiz.prototype.checkSetup = function() {
  if (!window.firebase || !(firebase.app instanceof Function) || !window.config) {
    window.alert('You have not configured and imported the Firebase SDK. ' +
        'Make sure you go through the codelab setup instructions.');
  } else if (config.storageBucket === '') {
    window.alert('Your Firebase Storage bucket has not been enabled. Sorry about that. This is ' +
        'actually a Firebase bug that occurs rarely. ' +
        'Please go and re-generate the Firebase initialisation snippet (step 4 of the codelab) ' +
        'and make sure the storageBucket attribute is not empty. ' +
        'You may also need to visit the Storage tab and paste the name of your bucket which is ' +
        'displayed there.');
  }
};

window.onload = function() {
  window.quiz = new quiz();
};
