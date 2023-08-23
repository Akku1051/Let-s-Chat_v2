function addUser() {

    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);

    window.location = "let'sChat-room.html"
}
const firebaseConfig = {
    apiKey: "AIzaSyBCljmW-Q16pRpfmDwy2TY-QENwKSi-BJs",
    authDomain: "let-schat-1d275.firebaseapp.com",
    databaseURL: "https://let-schat-1d275-default-rtdb.firebaseio.com",
    projectId: "let-schat-1d275",
    storageBucket: "let-schat-1d275.appspot.com",
    messagingSenderId: "1040444184895",
    appId: "1:1040444184895:web:11ab636d3ff662ddc2db8a"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function addUser() {
      var user_name = document.getElementById("user_name").value;
  
      firebase.database().ref("/").child(user_name).update({
          purpose : "add user"
      });
  }