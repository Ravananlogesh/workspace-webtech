console.log(document)
// let mydiv=document.createElement("div");
// document.body.append(mydiv);
// mydiv.style.border="1px solid black"
// let word="javascript";
// mydiv.textContent=`this is ${word}`;

// let para1=document.createElement("p");
// mydiv.appendChild(para1)
// para1.textContent="this is para1"

// let para2=document.createElement("p");
// mydiv.appendChild(para2)
// para2.textContent="this is para2"

// para1.setAttribute("id","para1")
// document.getElementById("para1").style.
// backgroundColor= "red"
// para2.className="para2"
// document.getElementsByClassName("para2")[0].style.
// backgroundColor="blue"

let mydiv=document.createElement("div")
document.body.append(mydiv)
// mydiv.style.border="1px solid black"
// mydiv.style.height="400px"
// mydiv.style.backgroundColor="grey"

// let h1=document.createElement("h1");
// let h2=document.createElement("h1");
// let Ename=prompt("Enter the name");
// let loc=prompt("Enter the location");

// mydiv.appendChild(h1);
// mydiv.appendChild(h2)
//    h1.textContent=`Ename : ${Ename}`
//    h2.textContent=`ELocation : ${loc}`
   
let ol=document.createElement("ol");
mydiv.appendChild(ol);
let count=Number(prompt("How Many list item you want to enter"));
let listitem
for (let i = 0; i<count; i++) {
   listitem =document.createElement("li");
     ol.appendChild(listitem);
     listitem.className="animal"
     let list=document.getElementsByClassName("animal")
     let aname=prompt(`Animal Name ${i+1} : `)
     while (aname=="") {
        aname=prompt(`Animal Name ${i+1} : `)
     }
        list[i].textContent=aname;
}


