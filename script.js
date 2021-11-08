var database = [
      {
		  username: "Aharon",
		  password: "022814461"
      }
];

var welcomeMessage = document.getElementById("header");
var learnMoreButton = document.getElementById("button1");
var registerButton = document.getElementById("button2");
var aboutButton = document.getElementById("button3");
var loginButton = document.getElementById("button4");

function register(username, password) {
	var chooseUsername = prompt("Pick a username:");
	var choosePassword = prompt("Pick a password:");
	const newUser = {
		username: chooseUsername,
		password: choosePassword
	}
	database.push(newUser);
}

function login(username, password) {
	var usernamePrompt = prompt("Username:");
      var passwordPrompt = prompt("Password:");
      for (i = 0; i < database.length; i++) {
           if (usernamePrompt === database[i].username&&passwordPrompt === database[i].password){
           	  welcomeMessage.innerHTML = "Welcome, " + database[i].username + ".";
           } else if (usernamePrompt!=database[i].username || passwordPrompt!=database[i].password){
           	  alert("Sorry, wrong username or password.");
           }
      }
}


registerButton.addEventListener("click", register);
loginButton.addEventListener("click", login);
