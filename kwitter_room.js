


var firebaseConfig = {
      apiKey: "AIzaSyCbJSk5Kn3Zd9Ifc1u_jyyJckfaS-OsNiQ",
      authDomain: "kwitter-819b8.firebaseapp.com",
      databaseURL: "https://kwitter-819b8-default-rtdb.firebaseio.com",
      projectId: "kwitter-819b8",
      storageBucket: "kwitter-819b8.appspot.com",
      messagingSenderId: "536340720397",
      appId: "1:536340720397:web:6839af43362cd4a1649e44",
      measurementId: "G-RZ3YJQEEYS"
    };
    firebase.initializeApp(firebaseConfig); 
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room_name -"+ Room_names);
      row = "<div class = 'room_name' onclick = 'redirecttoroomname(this.id)' id = '"+Room_names+"'>#"+Room_names+"</div><hr>"
      document.getElementById("output").innerHTML += row;
      });});}
getData();

user_name = localStorage.getItem("key_username");
document.getElementById("welcome_user").innerHTML = "Welcome "+user_name+"!";
function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding_roomname"
      });
      localStorage.setItem("key_roomname",room_name);
      window.location = "kwitter_page.html";

}

function redirecttoroomname(room_name)
{
      console.log(room_name);
      localStorage.setItem("key_roomname",room_name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("key_username");
      localStorage.removeItem("key_roomname");
      window.location = "index.html";
}