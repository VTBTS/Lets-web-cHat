var firebaseConfig = {
      apiKey: "AIzaSyAkopRDUB0_l03EuKBgVwt9_1K-mWJ7DlE",
      authDomain: "kwitter-834cf.firebaseapp.com",
      projectId: "kwitter-834cf",
      storageBucket: "kwitter-834cf.appspot.com",
      messagingSenderId: "883920884978",
      appId: "1:883920884978:web:5515405ad146527ddc2c6b"
    };
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();


function move(){
      window.location="room1.html";
}