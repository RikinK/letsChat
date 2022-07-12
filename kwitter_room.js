
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB65Yxh_V_IqupAP_fqwB-_C2L4BissUsg",
  authDomain: "let-s-chat-dc119.firebaseapp.com",
  databaseURL: "https://let-s-chat-dc119-default-rtdb.firebaseio.com",
  projectId: "let-s-chat-dc119",
  storageBucket: "let-s-chat-dc119.appspot.com",
  messagingSenderId: "850023679635",
  appId: "1:850023679635:web:1f9f19b7604ce89275ef66"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  username = localStorage.getItem("user_name");
  document.getElementById("username").innerHTML = "Welcome " + username;


function add_room(){
  room_name = document.getElementById("room_name").value;
  console.log(room_name);
  localStorage.setItem("room_name", room_name);
  firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);

 
}

  function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
row = "<div class='room_name' id="+Room_names+"onlick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML = row;
//End code
});});}
getData();