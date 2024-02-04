let pass=document.getElementById("conform");
let password=document.getElementById("password");
let eye=document.getElementById("eye");
let val=true;
let para=document.getElementsByClassName("para");
let user=document.getElementById("name");
let email=document.getElementById("email")
eye.addEventListener("click",()=>{
    if (val==true && pass.value!=="") {
    let txt=pass.value;
    pass.value="";
    pass.type="text"
    pass.value=txt;
    eye.childNodes[0].className="fa-solid fa-eye";
    if (txt===password.value && txt !=="") {
        para[3].textContent="Password is Match"
        para[3].style.color="green"
        para[3].style.fontWeight="bold"
        para[3].style.display="block"
    }
    if (txt !== password.value && txt !==""&& password.value !=="") {
        para[3].textContent = "Password did not match.";
        para[3].style.color  ="red";
        para[3].style.display="block"
    }
    val=false;
    }
    else{
        pass.type="password"
        para[3].style.display="none"
        para[3].textContent=""
        eye.childNodes[0].className="fa-solid fa-eye-slash";

        val=true;

    }
    
})

let reg=document.getElementById("submit");
reg.addEventListener("focus",()=>{
    if (user.value==="") {
        para[0].textContent = 'Please enter a username.';
        para[0].style.display="block"
        return;
    }
    else{
        para[0].style.display="none"
    }
    
    if (password.value === "") {
        para[2].textContent = 'Please enter a password.';
        para[2].style.display="block"
        return; 
      }
      else{
        para[2].style.display="none"
      }

      if (pass.value === "") {
        para[3].textContent = 'Please enter the confirm password.';
        para[3].style.display="block"
        return;
      }
      else{
        para[3].style.display="none"
      }
      if (email.value==="") {
        para[1].textContent = 'Please enter a Email.';
        para[1].style.display="block"
        return;
    }
    else{
        para[1].style.display="none"
    }

      if (pass.value !== password.value) {
        para[3].textContent = "Password did't match.";
        para[3].style.display="block"
        return;
      }
      else{
        para[3].style.display="none"
      }
})
user.addEventListener("input",()=>{
    let username=user.value;
    let check=false;
    for (let i = 0; i <username.length; i++) {
        if (!isNaN(Number(username[i]))) {
            check=true;
            break;
        }
    }
    if (check) {
        para[0].textContent="Numbers space snot allowed"
        para[0].style.display='block'
    } else {
        para[0].textContent=""
        para[0].style.display='none'
    }
})