username = localStorage.getItem("myusername");
document.getElementById("user").innerHTML = username;

function addroom(){
 room = document.getElementById("roomname").value;
 localStorage.setItem("Myroomname", room);
 window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
 Room_names = childKey;
 //Start code
 row = "<div class='roomname' id="+Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
 //End code
 });});}
getData();

function redirectToRoomName(Room_names){
    localStorage.setItem("Myroomnames", Room_names);
    window.location = "kwitter_page.html";     
}

function logout(){
    localStorage.removeItem('Myroomnames', Room_names);
    window.location = "index.html";
}