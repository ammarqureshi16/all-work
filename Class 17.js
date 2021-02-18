var mainonse = document.getElementById("main");
var h1 = document.createElement("h1");
h1.innerHTML = " Topics ";
mainone.appendChild(h1);

let topic = ["Array", "Push", "Dom"];
var listone = document.getElementById("listone");

for (var i = 0; i < topic.length; i++) {
  var list = document.createElement("li");
  list.innerHTML = topic[i];
  listone.appendChild(list);
}
function submit() {
  let arr = [];
  var inp = document.getElementById("people").value;
  arr.push(inp);
  console.log(arr);
  var order = document.getElementById("listone");
  for (var i = 0; i < arr.length; i++) {
    var list = document.createElement("li");
    var br = document.createElement("br");
    list.innerHTML = arr[i];
    order.appendChild(list);
    order.appendChild(br);
  }
  document.getElementById("people").value = " ";
}
var div = document.getElementById("main");
var table = document.createElement("table");
table.style.border = "solid black";
div.appendChild(table);
var tr = document.createElement("tr");
table.appendChild(tr);
var th = document.createElement("th");
// th.style.border="solid black"
tr.appendChild(th);
th.innerHTML = " First Name ";
var th1 = document.createElement("th1");
// th1.style.border="solid green"
tr.appendChild(th1);
// th1.style.border="solid black"
th1.innerHTML = " Last Name ";
var th2 = document.createElement("th2");
// th2.style.border="solid black"
tr.appendChild(th2);
th2.innerHTML = " Age ";

var tr1 = document.createElement("tr1");
table.appendChild(tr1);
var th4 = document.createElement("th4");
tr1.appendChild(th4);
th4.innerHTML = " AMMAR ";
var th5 = document.createElement("th5");
tr1.appendChild(th5);
th5.innerHTML = " QURESHI ";

// Bulb ON OFF***
// function check(){
//     var onButton=document.createElement('button')
//     onButton.innerHTML=" ON "
//     var offButon=document.createElement('button')
//     offButon.innerHTML=" OFF "
//     main.appendChild(onButton)
//     main.appendChild(ofButton)
// }
//  if(image===imagtwo){

//  }

// let on= false
// let off= true

// const onIMg =document.getElementById("onIMg")

// function imgWork(){
//     if(on){
//         const img= document.createElement("img")
//      //    img.setAttribute("src","on bulb.webp")
//      img.src =  'on bulb.webp'
//         img.style.width="200px"
//         img.style.height= "200px"
//         onIMg.appendChild(img)
//      }
// }

// function offBulb(){

//     if(off){
//         const img= document.createElement("img")
//      //    img.setAttribute("src","on bulb.webp")
//      img.src =  'off bulb.png'
//         img.style.width="200px"
//         img.style.height= "200px"
//         onIMg.appendChild(img)
//      }
// }
// function btnOn(){
//     on = true
//     off = false

//     console.log(on)
//    hello()
// }
// function btnOff(){
//     off = true
//     on = false
//    hello()
//  }
// function hello(){
//  const img=document.createElement("img")
//  const img2=document.createElement("img")
//  img2.src='off bulb.png'
//  img.src='on bulb.webp'
//  on && onIMg.appendChild(img)
//  off && onIMg.appendChild(img2)
// }
