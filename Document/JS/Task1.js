console.log(document)
let count=Number(prompt("How Many Row You Want to Enter "));
while (isNaN(count)) {
    count=Number(prompt("How Many Row You Want to Enter "));
}
let table=document.createElement("table");
document.body.append(table);

let thead=document.createElement("thead");
table.appendChild(thead);

let tr=document.createElement("tr");
thead.appendChild(tr)
table.style.border="1px solid black";
table.style.borderCollapse="collapse";

let th1=document.createElement("th");
let th2=document.createElement("th");
let th3=document.createElement("th");
tr.appendChild(th1)
tr.appendChild(th2)
tr.appendChild(th3)

th1.textContent="Sno"
th2.textContent="Name"
th3.textContent="Location"
th1.className="head"
th2.className="head"
th3.className="head"
let rowclass=document.getElementsByClassName("head")
for (let i = 0; i <rowclass.length; i++) {
    rowclass[i].style.border="2px solid black"
    rowclass[i].style.padding="40px"
    rowclass[i].style.fontSize="25px"
}
var tbody=document.createElement("tbody");
table.appendChild(tbody)

for (let i = 0; i<count; i++) {
     let btr=document.createElement("tr");
     tbody.appendChild(btr)

    for (let j = 0; j<3; j++) {
        let td=document.createElement("td");
        let trow=prompt(`Enter the Row ${i+1} Column ${j+1}`)
        let num=Number(trow);
           if (j==0 && isNaN(num)) {
            j--;
           }
           else if(trow==""|| !isNaN(num)&& j!=0){
                j--;
            }
          else{
          btr.appendChild(td);
          td.textContent=trow;
          td.className="tdata";
          }
    }  
}
let tdata=document.getElementsByClassName("tdata");
for (let i = 0; i <tdata.length; i++) {
 tdata[i].style.border="2px solid black"
 tdata[i].style.padding="40px"
 tdata[i].style.fontSize="25px"
}
