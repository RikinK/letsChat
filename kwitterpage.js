var firebaseConfig = {
    apiKey: "AIzaSyB65Yxh_V_IqupAP_fqwB-_C2L4BissUsg",
    authDomain: "let-s-chat-dc119.firebaseapp.com",
    databaseURL: "https://let-s-chat-dc119-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-dc119",
    storageBucket: "let-s-chat-dc119.appspot.com",
    messagingSenderId: "850023679635",
    appId: "1:850023679635:web:1f9f19b7604ce89275ef66"
    };
    
    firebase.initializeApp(firebaseConfig);

    function logout(){
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location = "index.html";
      
      }
      
      function send (){
        msg = document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0
        });
        document.getElementById("msg").value = "";
    }