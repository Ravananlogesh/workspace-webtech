let pass=document.getElementById("password");
let eye=document.getElementById("eye");
let val=true;
let para=document.getElementById("para")
eye.addEventListener("click",()=>{
    if (val) {
        let txt=pass.value;
    pass.value="";
    pass.type="text"
    pass.value=txt;
    val=false;
    eye.childNodes[0].className="fa-solid fa-eye";
    }
    else{
        pass.type="password"
        eye.childNodes[0].className="fa-solid fa-eye-slash";
        val=true;
    }
    
})

let user=document.getElementById("name")
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
        para.textContent="Numbers space not allowed"
        para.style.display='block'
    } else {
        para.textContent=""
        para.style.display='none'
    }
})