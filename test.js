
var education=prompt("Enter the Qualification:")
var serviceyear=+prompt("Enter the Service year:")
var currentsalary=+prompt("Enter the current salary:")

console.log("Qualification is:"+" "+education)
console.log("Service year is :"+" "+serviceyear)
console.log("Current salary is :"+" "+currentsalary)

if(education==='Bachelors' && serviceyear <=10){
    currentsalary=currentsalary+10000;
    console.log("Bonus : 10000")
    console.log("Final salary:"+" "+currentsalary);
}

else if(education==='Master' && serviceyear >=10){
    currentsalary=currentsalary+15000;
    console.log("Bonus : 15000")
    console.log("Final salary is :"+" "+currentsalary);
}

else if(education==='Master' && serviceyear >=20){
    currentsalary=currentsalary+20000;
    console.log("Bonus : 20000")
    console.log("Final salary is :"+" "+currentsalary);
}