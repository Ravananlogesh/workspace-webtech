let add=document.getElementById("add");

add.addEventListener("click",()=>{
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
    let head=document.getElementById("head")
    let n1=Number(num1);
    let n2=Number(num2); 
    let sum=n1+n2;
   head.textContent=`the sum of ${n1} and ${n2} is ${sum}`;   
})