function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username === "admin" && password === "user")    
    {
        alert("You have successfully login");
        location.href='index.html';
        return;
    }
    else
    {
        alert("Login Failed");
        location.href='Login Page.html'
        return;
    }
}