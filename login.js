let attempt=3; // number of attempts to log in allowed

//function that runs when user clicks

function validate(){
    let username= document.getElementById("username").value;
    let password=document.getElementById("password").value;
    console.log("username is " + username + "password is" + password)
        if(username == "eshani" && password == "1234"){
            alert("Login Successful");
            return false;
        }
        else{
            attempt --; //Decrementing by one.
            alert("you have left"+attempt+ "attempt");    
        }

}