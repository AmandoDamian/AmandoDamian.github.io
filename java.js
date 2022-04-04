function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="admin"&& password=="user")    
    {
        alert("You have successfully login");
        window.open("index.html");
        return false;
    }
    else
    {
        alert("Login Failed");
        window.open("index.html");
        return false;
    }
}