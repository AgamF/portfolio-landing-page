var lorem = "This portfolio webpage was created by Agam Farajpur.\n " +
 'Hi! this is Agam writing.\n ' + 
 'I am a 17 year old web developer living in Israel.\n ' + 
 'I created this web app using HTML, CSS, and JavaScript as the main foundations.\n ' +
 'I am constantly learning, and ill try to make this webpage look better and do more stuff in the future!';

var isLoggedIn = false;
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

function removeElements() {
	clock.remove();
	// Make a buffer here
	buffer2.style.height = "650px"
}

function about() {
	clock.remove();
	buffer2.style.height = "300px"
	var title = document.createElement("h2");
	title.setAttribute("style", "text-align: center;");
	title.style.color = "white";
	title.style.width = "1000px";
	title.style.marginLeft = "450px";
	var titleNode = document.createTextNode(lorem);
	title.appendChild(titleNode);
	buffer2.appendChild(title);
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
              removeElements();
              function logOut() {
				isLoggedIn = false;
				logoutButton.remove();
				document.getElementById("clock-container").appendChild(clock);
				buffer2.style.height = "50px";
				buttonArray.appendChild(loginButton);
				welcomeMessage.innerHTML = "Welcome, Friend.";
               }
              logoutButton.addEventListener("click", logOut);
              return	
          } 
     }
     alert("Sorry, wrong username or password.");
}     

aboutButton.addEventListener("click", about);
registerButton.addEventListener("click", register);
LoginButton.addEventListener("click", login);
