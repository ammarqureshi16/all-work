var num1 = 13;
var num2 = 9;
//Plus karanaa hay
var sum = num1 + num2;
alert("Result of Sum of 13 and 9 is:" + " " + sum);
//Minus Karanaa
var sum = num1 - num2;
alert("Result of subtracting 9 from 13 is:" + " " + sum);
var sum = num1 * num2;
alert("Result of multiplying 13 and 9 is:" + " " + sum);
var sum = num1 / num2;
alert("REsult of dividing 13 by 9 is:" + " " + sum);
var sum = num1 - num2;
alert("Remainder of dividing 13 by 9 is:" + " " + sum);
var num3 = 3;
alert("Initial value:" + " " + num3);
var num4 = 4;
alert("Value after increment is:" + " " + num4);
var num5 = 4;
var num6 = 1;
var sum = num3 + num4 + num5;
alert("Value after addition is:" + " " + sum);
var sum = num3 + num4 + num5 - num6;
alert("Value after decrement is:" + " " + sum);
var num7 = 9;
var sum = num3 + num4 + num5 - num6 - num7;
alert("The remainder is:" + " " + sum);

var name = "Multiplication table of 4";
var num = +prompt("Enter the number:");
console.log(num + " " + "x" + " " + "1" + " " + "=" + " " + num * 1);
console.log(num + " " + "x" + " " + "2" + " " + "=" + " " + num * 2);
console.log(num + " " + "x" + " " + "3" + " " + "=" + " " + num * 3);
console.log(num + " " + "x" + " " + "4" + " " + "=" + " " + num * 4);
console.log(num + " " + "x" + " " + "5" + " " + "=" + " " + num * 5);
console.log(num + " " + "x" + " " + "6" + " " + "=" + " " + num * 6);
console.log(num + " " + "x" + " " + "7" + " " + "=" + " " + num * 7);
console.log(num + " " + "x" + " " + "8" + " " + "=" + " " + num * 8);
console.log(num + " " + "x" + " " + "9" + " " + "=" + " " + num * 9);
console.log(num + " " + "x" + " " + "10" + " " + "=" + " " + num * 10);

var shop = "Shopping cart";
alert(shop);
var num01 = 370;
alert("Price of item 1 is:" + " " + num01);
var num02 = 4;
alert("Quantily of item 1 is:" + " " + num02);
var num03 = 800;
alert("Price of item 2 is:" + " " + num03);
var num04 = 2;
alert("Quantily of item 2 is:" + " " + num04);
var num05 = 1600;
var num06 = 180;
var num07 = 1480;
sum = num05 + num06 + num07;
alert("Total cost of your arder is:" + " " + sum);

var name1 = "Mark sheet";
alert(name1);
var englishMarks = 75;
var mathsMarks = 58;
var urduMarks = 69;
var islamiatMarks = 70;
var physicsMarks = 68;
var obtmarks =
  englishMarks + mathsMarks + urduMarks + islamiatMarks + physicsMarks;

percentage = (obtmarks / 500) * 100;

alert("Mark of Englis is" + "  " + englishMarks);
alert("Mark of Maths is" + "  " + mathsMarks);
alert("Mark of Urdu is" + "  " + urduMarks);
alert("Mark of Islamiat is" + "  " + islamiatMarks);
alert("Mark of Physics is" + "  " + physicsMarks);
alert("percentage is:" + "  " + percentage + "%");

var usa = 10;
var pkr = 104;
sum = usa * pkr;
alert("10$ in PKR:" + " " + sum);
var saudi = 25;
var pkr2 = 28;
sum = saudi * pkr2;
alert("25 Saudi Riyals in PKR:" + " " + sum);
var num22 = 1040;
var num23 = 700;
sum = num22 + num23;
alert("Total currency in PKR:" + " " + sum);

var num19 = 8;
var num20 = 28;
var num21 = 9;
sum = num19 + num20 / num21;
alert(sum);

var currentyear = 2020;
var birthdayyear = 2003;
alert("Current year:" + " " + currentyear);
alert("Birthday year:" + " " + birthdayyear);
alert("The are either 16 or 17 year old");

var favorite = "Favorite snacks:Lays";
alert(favorite);
var age = "Current age is:12";
alert(age);
var ageMax = "Old age is:72";
alert(ageMax);
var amt = "Amount of snacks per day:3";
alert(amt);
var result = "You will need 180 lays to last you until the ripe old age of 72";
alert(result);

var priceItem1 = 500;
var quantityitem1 = +prompt("enter quantity of item1");
var priceItem2 = 400;
var quantityitem2 = +prompt("Enter price of item2");
var totalprice1 = priceItem1 * quantityitem1;
var totalprice2 = priceItem2 * quantityitem2;

console.log("price of item 1 is:" + " " + priceItem1);
console.log("Quantity of item 2 is:" + " " + quantityitem1);
console.log("Price of item 2 is:" + " " + priceItem2);
console.log("Quantity of item 2 is:" + " " + quantityitem2);

var nam = prompt("Enter your colour");
if (nam === "red") {
  alert("Car must stop");
} else if (nam === "yellow") {
  alert("car must ready");
} else if (nam === "green") {
  alert("car must go");
} else {
  alert("invalid color");
}

var math = +prompt("Enter the marks of math");
var urdu = +prompt("Enter the marks of urdu");
var english = +prompt("Enter the marks english");
var obtmarks = math + urdu + english;
var total = 300;
var percentage = (obtmarks * 100) / 300;

console.log("Total Marks:" + " " + total);
console.log("Marks obtained:" + " " + obtmarks);
console.log("Percentage:" + " " + percentage + "%");

if (percentage >= 80) {
  console.log("A1 Grade  very good ");
} else if (percentage >= 70) {
  console.log(" B  good could do better ");
} else if (percentage >= 60) {
  console.log("C  need to improve");
} else {
  console.log("Fail sorry");
}

var email = prompt("Enter the new email:");
console.log(email);
var loweremail = email.toUpperCase();
console.log(loweremail);
var password = prompt("Enter the new password:");
console.log(password);
var lowerpassword = password.toUpperCase();
console.log(lowerpassword);

var useremail = prompt("Enter the email:");
console.log(useremail);
var mainemail = useremail.toUpperCase();
console.log(mainemail);
var password2 = prompt("Enter the email:");
console.log(password2);
var mainpassword = password2.toUpperCase();
console.log(mainpassword);
