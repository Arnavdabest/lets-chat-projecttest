var firebaseConfig = {
    apiKey: "AIzaSyDK7nehDWZnkLceERabKM-8AaFkxOaf514",
    authDomain: "kwitter-web-app-project-f5570.firebaseapp.com",
    databaseURL: "https://kwitter-web-app-project-f5570-default-rtdb.firebaseio.com",
    projectId: "kwitter-web-app-project-f5570",
    storageBucket: "kwitter-web-app-project-f5570.appspot.com",
    messagingSenderId: "584790485670",
    appId: "1:584790485670:web:2531d7c83b5fab9ecda267",
    measurementId: "G-HR69TXCHWV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  user_name = localStorage.getItem("myusername");
  room_name = localStorage.getItem("Myroomname");
  function send(){
      message = document.getElementById("sending").value;
      firebase.database().ref(room_name).push({
          name: user_name,
          message: message,
          likes: 0
      });
  }
  function getData() {firebase.database().ref("/"+room_name).on('value', function(snapshot) {
       document.getElementById("output").innerHTML = ""; 
       snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
             childData = childSnapshot.val(); 
             if(childKey != "purpose") { 
                 firebase_message_id = childKey; 
                 message_data = childData; 
                 names = message_data['name'];
                 messages = message_data['message'];
                 like = message_data['likes'];
                 name_with_tag = "<h4>"+ names + "</h4>";
                 message_with_tag = "<h4 class='message_h4'>" + messages + "</h4>";
                 like_button = "<button class='btn btn-danger' id="+ firebase_message_id + " value = " + like + " onclick ='updateLike(this.id)'>";
                 span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>like: "+"</span></button><hr>";

                 row = name_with_tag + message_with_tag + like_button + span_with_tag;
                 document.getElementById("output").innerHTML += row;
     }
     });
     });
     } 
     
     getData();

     function updateLike(){
         button.id = message.id;
         like = document.getElementById(button.id).value;
         updated_likes = Number(likes) + 1;

         firebase.database().ref(room_name).child(message.id).update({
             likes : updated_likes
         });
     }

     function logout(){
        localStorage.removeItem("myUsername");
        localStorage.removeItem("room_name");
        window.location.replace("index.html");
     }