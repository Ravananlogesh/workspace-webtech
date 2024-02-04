log.style.borderTopLeftRadius="30px";
document.getElementById("sign").style.borderTopRightRadius="30px";
document.getElementById("log").style.borderTopLeftRadius="30px";
function signUp(){
    document.getElementById("sign").style.backgroundColor=" rgba(241,124,199, 0.4)";
    document.getElementById("sign").style.boxShadow=" 0px 2px 20px 2px black";
    document.getElementById("log").style.boxShadow="none";
    document.getElementById("sign").style.borderTopRightRadius="30px";
    document.getElementById("login-container").style.display="none";
    document.getElementById("register-container").style.display="block";
}
function login(){
    document.getElementById("log").style.boxShadow="0px 2px 20px 2px black";
    document.getElementById("sign").style.boxShadow="none";
    document.getElementById("sign").style.backgroundColor="rgba(241,124,199, 0.4)";
    document.getElementById("login-container").style.display="block";
    document.getElementById("register-container").style.display="none";
}