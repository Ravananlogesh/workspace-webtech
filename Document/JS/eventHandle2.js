// function change(){
//     let choose=document.getElementById("choose").value;
//     let head=document.getElementById("head");
//         head.textContent="selected place is "+choose;  
// }
// let choose=document.getElementById("choose")
// choose.addEventListener("change",function(){
//     let c=choose.value;
//     console.log(c)
//     document.getElementById("head").textContent=`selected place is ${c}`;
// })

let add=document.getElementById("add");
let sub=document.getElementById("sub");
let div=document.getElementById("division");
let multi=document.getElementById("multi");
let head=document.getElementById("heading")
add.addEventListener("click",()=>{
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
    let n1=Number(num1);
    let n2=Number(num2); 
    let sum=n1+n2;
   let p=document.getElementById("para1");
   document.getElementById("calci").style.display="block";
   p.textContent=`the sum of ${n1} and ${n2} is ${sum}`;   
   head.style.display="none";
})
sub.addEventListener("click",()=>{
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
    let n1=Number(num1);
    let n2=Number(num2); 
    let sum=n1-n2;
   let p=document.getElementById("para2");
   document.getElementById("calci").style.display="block";
   p.textContent=`the addition of ${n1} and ${n2} is ${sum}`; 
   head.style.display="none"  
})
div.addEventListener("click",()=>{
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
    let n1=Number(num1);
    let n2=Number(num2); 
    let sum=n1/n2;
   let p=document.getElementById("para3");
   document.getElementById("calci").style.display="block";
   p.textContent=`the divition of ${n1} and ${n2} is ${sum}`;  
   head.style.display="none" 
})
multi.addEventListener("click",()=>{
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
    let n1=Number(num1);
    let n2=Number(num2); 
    let sum=n1*n2;
   let p=document.getElementById("para4");
   document.getElementById("calci").style.display="block";
   p.textContent=`the Muliplication of ${n1} and ${n2} is ${sum}`;   
   head.style.display="none"
})
let restart=document.getElementById("restart");
restart.addEventListener("click",function(){
    window.location.reload();
})