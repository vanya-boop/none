function addUser()
{
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("key_username",user_name);
    window.location = "kwitter_room.html";
    
}