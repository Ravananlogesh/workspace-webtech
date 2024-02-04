// function fun() {
//     console.log("mouse Over")
// }
// function funout() {
//     console.log("mouse out")
// }

// function changeColor(){
//     document.getElementById("mydiv").style.backgroundColor="blue";
// }
function createDiv(){
  let mydiv=document.createElement("div");
  document.body.append(mydiv)
  mydiv.style.border="1px solid black";
  mydiv.style.height="300px"
  mydiv.style.width="300px"
  let head1=document.createElement("h1")
  mydiv.appendChild(head1)
  let head2=document.createElement("h1")
  mydiv.appendChild(head2)
  let input1=prompt("Enter the Name");
  let check1=Number(input1);
  
  while (input1==""||!isNaN(check1)) {
    input1=prompt("Enter the Name");
    check1=Number(input1);
  }
  let input2=prompt("Enter the Location");
  let check2=Number(input2);
  while (input2==""||!isNaN(check2)) {
    input2=prompt("Enter the Location");
    check2=Number(input2);
  }
  head1.textContent=`Ename : ${input1}`
  head2.textContent=`Location : ${input2}`
  


}
let color= "red"
   
function colorChange(){
    if (color==="red") {
        color= document.getElementById("mydiv").style.backgroundColor="blue"
    }
    else{
        color= document.getElementById("mydiv").style.backgroundColor="red"
    }
}
let mydiv=document.createElement("div");
  document.body.append(mydiv)
  mydiv.style.border="1px solid black";
  mydiv.style.height="300px"
  mydiv.style.width="300px"
 let display= mydiv.style.display="none"
function displayDiv(){
     if (display==="none") {
        display= mydiv.style.display="block"
     } else {
        display= mydiv.style.display="none"
     }
}
