if(typeof(Storage)!=="undefined") 
    {
    localStorage.lastname=document.getElementById("username").innerText;
    document.getElementById("notes").innerHTML="Last name: " + localStorage.lastname.toString();
    }
else
    {
    document.getElementById("notes").innerHTML="Sorry, your browser does not support web storage...";
    }