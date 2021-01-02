var mainonse=document.getElementById("main")
var h1=document.createElement("h1")
h1.innerHTML=(" Topics ")
mainone.appendChild(h1)

let topic=["Array","Push","Dom"]
var listone=document.getElementById("listone")


for(var i=0; i<topic.length; i++){
    var list=document.createElement("li")
     list.innerHTML=topic[i]
     listone.appendChild(list)
}

function submit(){
    let arr= [];
    var inp=document.getElementById("people").value;

    arr.push(inp)
    console.log(arr)
    var order=document.getElementById("listone")
    for(var i=0; i<arr.length; i++){
        var list=document.createElement("li");
        var br=document.createElement("br");
        list.innerHTML=arr[i];
        order.appendChild(list);
        order.appendChild(br);
    }
    
document.getElementById("people").value= " "
}


var div=document.getElementById("main")
var table=document.createElement("table")
table.style.border="solid black"
div.appendChild(table)
var tr=document.createElement("tr")
table.appendChild(tr)
var th=document.createElement("th")
th.style.border="solid black"
tr.appendChild(th)
th.innerHTML=" First Name "
var th1=document.createElement("th1")
th1.style.border="solid green"
tr.appendChild(th1)
th1.style.border="solid black"
th1.innerHTML=" Last Name "
var th2=document.createElement("th2")
th2.style.border="solid black"
tr.appendChild(th2)
th2.innerHTML=" Age "
// var tr1.createElement("tr1")
