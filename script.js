isLoggedIn = false;
var database = [];
var welcomeMessage = document.getElementById("header");
var learnMoreButton = document.getElementById("button1");
var registerButton = document.getElementById("button2");
var aboutButton = document.getElementById("button3");
var loginButton = document.getElementById("button4");
var buttonArray = document.getElementById("btn-array");
var buffer2 = document.getElementById("buffer2");
var clock = document.getElementById("clock");
var buffer = document.getElementById("buffer");

function register() {
	var chooseUsername = prompt("Pick a username:");
	var choosePassword = prompt("Pick a password:");
	if (choosePassword.length < 6) {
		alert("Minimum password length is 6 characters.");
		return;
	} else if (choosePassword.length > 22) {
		alert("Maximum password length is 22 characters.");
		return;
	} else {
		   var newUser = {
		   username: chooseUsername,
		   password: choosePassword
		}
	}
	database.push(newUser);
}

function login() {
	var usernamePrompt = prompt("Username:");
     var passwordPrompt = prompt("Password:");
     for (i = 0; i < database.length; i++) {
          if (usernamePrompt === database[i].username&&passwordPrompt === database[i].password){
              welcomeMessage.innerHTML = "Welcome, " + database[i].username + ".";
              loginButton.remove();
              isLoggedIn = true;
              const logoutButton = document.createElement("button");
              logoutButton.innerHTML = "Log out";
              logoutButton.style.background = "linear-gradient(to bottom, grey, white)"
              logoutButton.style.border = "2px solid grey"
              buttonArray.appendChild(logoutButton);
              function logOut() {
				isLoggedIn = false;
				logoutButton.remove();
				buttonArray.appendChild(loginButton);
				welcomeMessage.innerHTML = "Welcome, Friend.";
               }
              logoutButton.addEventListener("click", logOut);
              return	
          } 
     }
     alert("Sorry, wrong username or password.");
}     

// **REMINDER** Create a while loop that says "Whenever isLoggedIn = true;
// create a timeline which is the same for all users, by removing the html
// elements and replacing them with some juicy articles."

registerButton.addEventListener("click", register);
loginButton.addEventListener("click", login);