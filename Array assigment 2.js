// Question 1

var array = [];
array.push("Ammar");
console.log(array);
array.push("Qureshi");
console.log(array);
array.push("Ahmed");
console.log(array);
array.push("Ali");
console.log(array);
array.push("Saad");
console.log(array);
array.push("Khan");
console.log(array);
// Question: 3
var array = [];
array.push("Ye to hoga");
console.log(array);
// Question: 4

var array = [];
array.push(3);
console.log(array);
array.push(3);
console.log(array);
array.push(6);
console.log(array);
array.push(3);
console.log(array);
array.push(9);
console.log(array);
array.push(0);
console.log(array);
array.push(9);
console.log(array);
array.push(6);
console.log(array);
array.push(9);
console.log(array);
array.push(1);
console.log(array);
// Question: 7

var array = [];
array.push("Ufone");
console.log(array);
array.push("Zong");
console.log(array);
array.push("Jazz");
console.log(array);
array.push("Warid");
console.log(array);
// Question: 8

var array = [];
array.push("Phd");
array.push("M.Phil");
array.push("Ms");
array.push("Bcom");
array.push("Bs");
array.push("Bcs");
array.push("Hsc");
array.push("Ssc");
console.log(array);

// Question: 9
var array = [];
array.push("Avengers : Age of Ultron");
console.log(array);
array.push("Spectre");
console.log(array);
array.push("Jurassic World");
console.log(array);
array.push("Inside Out");
console.log(array);
//Question: 10

var array = ["Bmw", "Vigo", "Corolla Gli", "Prado"];
console.log(array);
array[0] = "Bmw";
array[5] = "Prado";
console.log(array);
console.log("First index of the array : ", array.indexOf("Bmw"));
var newarray = array.slice(0, 1);
console.log("Car at first index of the array : ", newarray);
console.log("Last index of the array : ", array.indexOf("Prado"));
var arrayNew = array.slice(3, 4);
console.log("Car at last index of the array : ", arrayNew);

//question: 11
var students_name = ["Micheal", "John", "JohnySins"];
var studentsscore = [
  "Score of Micheal is " + 300,
  "Score of John is " + 350,
  "Score of JohnySins is " + 450,
];
var percentage_of_micheal = (300 * 100) / 500;
var percentage_of_john = (350 * 100) / 500;
var percentage_of_johnysins = (450 * 100) / 500;
var micheal_score_and_percentage = [
  "Score of Micheal is ",
  300,
  "." + "Percentage :",
  percentage_of_micheal,
  "%",
];
console.log(micheal_score_and_percentage);
var john_score_and_percentage = [
  "Score of John is ",
  350,
  "." + "Percentage :",
  percentage_of_john,
  "%",
];
console.log(john_score_and_percentage);
var johnysins_score_and_percentage = [
  "Score of JohnySins is ",
  450,
  "." + "Percentage :",
  percentage_of_johnysins,
  "%",
];
console.log(johnysins_score_and_percentage);
//Question 12.

var color = ["Red", "Yellow", "Green"];
console.log(color);
//Question 12. Part(A)
var userInput = prompt("Enter the color : & Add That Color To The Beginning:");
color.unshift(userInput);
console.log(color);
// Question 12. Part(B)
var inputUser = prompt("Add To The End & Add That Color To The End:");
color.push(inputUser);
console.log(color);
// Question 12. Part(C)
var userInput2 = prompt("Add Two More Color To The Beginning:");
color.unshift(userInput2);
console.log(color);
//Question 12. Part(D)
color.shift();
console.log(color);
//Question 12. Part(E)
color.pop();
console.log(color);
//Question 12. Part(F)
var userInput3 = prompt(
  "Add A Color & Color Name. Then Add The Color To Desired Position/Index."
);
color.splice(0, 0, userInput3);
console.log(color.indexOf(userInput3));

//Question: 13.

let score_of_students = [420, 520, 480, 220];
console.log(score_of_students);
score_of_students.sort();
console.log(score_of_students);
//Question: 14.

let fruits = ["Mango", "Lychee", "Apple", "Banana"];
console.log(fruits);
fruits.sort();
console.log(fruits);
//Question: 15.

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
console.log(cities);
cities_Copy = cities.slice(2, 5);
console.log(cities_Copy);
//Question: 16.

var arr = [
  "Web" + " " + "&" + " " + "Mobile" + " " + "App" + "Development" + "Course",
];
console.log(arr);
var string = arr.toString();
console.log(string);
//Question: 18.

var objects = ["Moniter", "Mouse", "Keyborad", "Cpu"];
console.log(objects);
objects.pop();
console.log(objects);
objects.pop();
console.log(objects);
objects.pop();
console.log(objects);
//Question: 20.

var array = [["Hello Jee"], [1, 2, 3, 4, 5, 6, 7, 8], [true, false]];
console.log(array);
// Question: 21.

var matrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1],
];
console.log(matrix);
