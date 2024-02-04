let mydiv = document.createElement("div");
document.body.append(mydiv);
mydiv.id = "mydiv";
mydiv.style.display = "none";
mydiv.style.border = "1px solid black";

let table = document.createElement("table");
mydiv.appendChild(table);
table.style.borderCollapse = "collapse";
table.style.width = "100%";
table.style.height = "auto";

let thead = document.createElement("thead");
table.appendChild(thead);

let tr = document.createElement("tr");
thead.appendChild(tr);

let th1 = document.createElement("th");
let th2 = document.createElement("th");
let th3 = document.createElement("th");
let th4 = document.createElement("th");
let th5 = document.createElement("th");

tr.appendChild(th1);
tr.appendChild(th2);
tr.appendChild(th3);
tr.appendChild(th4);
tr.appendChild(th5);

th1.className = "head";
th2.className = "head";
th3.className = "head";
th4.className = "head";
th5.className = "head";

let tablehead = document.getElementsByClassName("head");
for (let i = 0; i < tablehead.length; i++) {
    tablehead[i].style.border = "1px solid black";
    tablehead[i].style.height = "70px";
    tablehead[i].style.fontSize = "25px";
    tablehead[i].style.backgroundColor="rgb(171,171,152)"
}

th1.textContent = "SNo";
th2.textContent = "Bike Name";
th3.textContent = "Bike No";
th4.textContent = "Check In";
th5.textContent = "Check Out";

var tbody = document.createElement("tbody");
table.appendChild(tbody);
let n = 1;


function create() {
    let btr = document.createElement("tr");
    tbody.appendChild(btr);
    let btd1 = document.createElement("td");
    btr.appendChild(btd1);
    let input = document.getElementsByClassName("inputval");
    for (let i = 0; i < input.length; i++) {
        let btd = document.createElement("td");
        btr.appendChild(btd);
        btd.className = "tdata";
        let text = input[i].value;
            btd.textContent = text;
            input[i].value="";
        }
    
        btd1.textContent = String(n++);
        btd1.style.border = "1px solid black";
            btd1.style.height = "70px";
            btd1.style.textAlign = "center";
            btd1.style.color = "blue";
            btd1.style.fontSize = "20px";
            btd1.style.fontSize = "20px";
        mydiv.style.display = "block";
        let tdata = document.getElementsByClassName("tdata");
        for (let i = 0; i < tdata.length; i++) {
            tdata[i].style.border = "1px solid black";
            tdata[i].style.height = "70px";
            tdata[i].style.color = "blue";
            tdata[i].style.textAlign = "center";
            tdata[i].style.fontSize = "20px";
            tdata[i].style.fontWeight="bold";
        }
}

let parking = document.getElementById("submit");
parking.addEventListener("click", function () {
    
    let check = true;
    let input = document.getElementsByClassName("inputval");
    for (let i = 0; i < input.length; i++) {
        if (input[i].value==="") {
            input[i].nextSibling.textContent="please fill the equirement";
            input[i].nextSibling.style.color="red"
        }
        
    }
    for (let i = 0; i < input.length; i++) {
        let text = input[i].value;
        if (text !== "") {
        } else {
            check = false;
            break;
        }
    }
    if (check===true) {
        create();
    }
 
});
