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

    user_name = localStorage.getItem("key_username");
    room_name = localStorage.getItem("key_roomname");

    function send()
    {
          msg = document.getElementById("message").value;
          firebase.database().ref(room_name).push({
                message:msg,
                name:user_name,
                like:0
          });
          document.getElementById().value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
         console.log(message_data);
         name = message_data['name'];
         message = message_data['message'];
         like = message_data['like'];
         row1 = "<h4>"+name+"<img src = 'tick.png' class = 'user_tick'></h4><br>";
         row2 = "<h4 class  = 'message_h4'>"+message+"</h4><br>";
         row3 = "<button class = 'btn btn-warning' id = '"+firebase_message_id+"' onclick = 'update_Like(this.id)' value = "+like+"><span class = 'glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button><hr>";
         final_row = row1+row2+row3;
         document.getElementById("output").innerHTML += final_row;

      } });  }); }
getData();

function update_Like(message_id)
{
      console.log(message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      update_Like = Number(likes)+1;
      console.log(update_Like);
      firebase.database().ref(room_name).child(message_id).update({
            like:update_Like
      });
}
