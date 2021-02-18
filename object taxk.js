var arr = [
  (naam1 = {
    firstName: "Ammar",
    lastName: "Qureshi",
    age: 18,
    eyeColor: "Black",
  }),
  (naam2 = {
    firstName: " Osama ",
    lastname: " Haroon ",
    age: " 20 ",
  }),
  (naam3 = {
    firstName: " Ali ",
    lastName: " Qureshi ",
    age: " 22 ",
  }),
];

var div = document.getElementById("main");
var table = document.createElement("table");
table.style.border = "solid black";
div.appendChild(table);
var tr = document.createElement("tr");
table.appendChild(tr);
var th = document.createElement("th");
tr.appendChild(th);
th.innerHTML = " First Name ";

var th1 = document.createElement("th");
tr.appendChild(th1);
th1.innerHTML = " Last Name ";
var th2 = document.createElement("th");
tr.appendChild(th2);
th2.innerHTML = " Age ";

// var div=document.getElementById("main")
// var table=document.createElement("table")
// table.style.border="solid black"
// div.appendChild(table)

var tr = document.createElement("tr");
table.appendChild(tr);
var th = document.createElement("th");
// th.style.border="solid black"
tr.appendChild(th);
th.innerHTML = naam3.firstName;

var th = document.createElement("th");
tr.appendChild(th);
th.innerHTML = naam3.lastName;

var th = document.createElement("th");
tr.appendChild(th);
th.innerHTML = naam3.age;

delete naam3.firstName;
delete naam3.age;
console.log(naam3);

var tr1 = document.createElement("tr1");
table.appendChild(tr1);
var th = document.createElement("th4");
tr.appendChild(th);
th.innerHTML = naam.firstName;
