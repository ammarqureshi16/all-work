
var name=prompt("Enter your name:")
 if(naam){
    alert("Hi ,"+" "+naam)}
var num=+prompt("Enter the number:")
console.log(num+" "+" x "+" "+" 1 "+" =  "+num*1)
console.log(num+" "+" x "+" "+" 2 "+" =  "+num*2)
console.log(num+" "+" x "+" "+" 3 "+" =  "+num*3)
console.log(num+" "+" x "+" "+" 4 "+" =  "+num*4)
console.log(num+" "+" x "+" "+" 5 "+" =  "+num*5)
console.log(num+" "+" x "+" "+" 6 "+" =  "+num*6)
console.log(num+" "+" x "+" "+" 7 "+" =  "+num*7)
console.log(num+" "+" x "+" "+" 8 "+" =  "+num*8)
console.log(num+" "+" x "+" "+" 9 "+" =  "+num*9)
console.log(num+" "+" x "+" "+" 10 "+" =  "+num*10)

var city=prompt("Enter your city")
if(city){
    alert(city+" "+"Wellcome to city of light")}
var nam=prompt("Enter your colour")
 if(nam==="red"){
    alert
    console.log("Car must stop")}
else if(nam==="yellow"){
    alert("car must ready")
    console.log("car must ready")}
 else if(nam==="green"){
    alert+console.log("car must go")}
else{
    alert+console.log("invalid color")}

var math = +prompt("Enter the marks of math")
var urdu = +prompt("Enter the marks of urdu")
var english = +prompt("Enter the marks english")
var obtmarks = (math + urdu + english)
var total = 300
var percentage = (obtmarks * 100 / 300)
console.log("Total Marks:" + " " + total)
console.log("Marks obtained:"+" "+obtmarks)
console.log("Percentage:"+" "+percentage+"%")
if (percentage >= 80) { console.log("A1 Grade  very good ") }
else if (percentage >= 70) { console.log(" B  good could do better ") }
else if (percentage >= 60) { console.log("C  need to improve") }

else { console.log("Fail sorry")}
var priceshirt= 1000
var quantitytshirt=+prompt('Enter Quantity of T-shirt is:')
var priceusb= 700
var quantityofusb=+prompt('Enter Quantity of usb flash drive:')
var totalpriceshirt= priceshirt*quantitytshirt
var totalpriceusb= priceusb*quantityofusb
var ship="Shipping charges: 250"

console.log("price of T-shirt  is:"+" "+ priceshirt)
console.log("Quantity of T-shirt  is:"+" "+quantitytshirt)
console.log("Price of usb flash drive is:"+" "+priceusb)
console.log("Quantity of usb flash drive is:"+" "+quantityofusb)
console.log(ship)
console.log("Total cost of your order is:"+" "+priceshirt*quantitytshirt)

var teamA=+prompt("Enter the team A run:")
var teamB=+prompt("Enter the team B run:")
if (teamA > teamB  ) { console.log("Team A WIN") }
else if (teamB > teamA ) { console.log("Team B WIN") }
else { console.log("Macth is draw")}

var input1="Ammar"
var input2=45454545
var input3=true
console.log(typeof(input1))
console.log(typeof(input2))
console.log(typeof(input3))

var num=+prompt("Enter the number")
var noun=prompt("Enter the noun")
if(num===1){
    alert(num+" "+noun)}
else if(num>1){
    alert(num+" "+noun+"s")}
var letter=+prompt("enter the letter")
switch (letter){
case 'a':
alert("It is vovel")
break;
case 'e':
alert("It is a vovel")
break;
case 'i':
alert("It is a vovel")
break;
case 'o':
alert("It is a vovel")
break ;
case 'u':
alert("It is a vovel")
break ;
default :
alert("It is a consonant")
}

var num=+prompt("Enter the number 1")
var num2=+prompt("Enter the number 2")
var num3=+prompt("Enter the number 3")
if (num > num2 && num3){
    alert(num+" "+"This number is larges")
}
else if(num2 > num3){
    alert(num2+" "+"This number is small")
}
else if(num3>10){
    alert(num3+" "+"This number is small")
}


