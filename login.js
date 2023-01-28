const login = require('./data.json')
const { Travellers } = login;


//Login confirmation
function log_in (username, password) {
  //let loginSuccess = false;

  if (username in Travellers && Travellers[username].password == password) {
    console.log("Login successfully");
    //loginSuccess = true;
    return true;
  }
  else {
    console.log("Login unsuccessfully")
    return false;
  }
}

//log_in('hma12', 'qwerty123')