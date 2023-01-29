function log_in() {
    document.getElementById("login-page").className = "hidden";
    document.getElementById("app-contents").className = "visible";
    document.getElementById("dashboard").className = "visible";
}

function to_dashboard() {
    document.getElementById("dashboard").className = "visible";
    document.getElementById("info-form").className = "hidden";
    document.getElementById("profile").className = "hidden";
}

function to_form() {
    document.getElementById("dashboard").className = "hidden";
    document.getElementById("info-form").className = "visible";
    document.getElementById("profile").className = "hidden";  
}


function to_profile() {
    document.getElementById("dashboard").className = "hidden";
    document.getElementById("info-form").className = "hidden";
    document.getElementById("profile").className = "visible";  
}