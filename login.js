const data = require('./data.json')
const { Travellers } = data;

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    fetch('./data.json')
      .then(response => response.json())
      .then(data => {
        const { Travellers } = data;
        if (username in Travellers && Travellers[username].password == password) {
          document.getElementById("login-page").className = "hidden";
          document.getElementById("app-contents").className = "visible";
          document.getElementById("dashboard").className = "visible";
          return true;
        }
        else {
          document.getElementById("error-message").className = "visible";
          return false;
        }
      });
}