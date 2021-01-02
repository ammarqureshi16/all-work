var userSignup={
}
function signup(){
var firstName=document.getElementById("firstName").value
var lastName= document.getElementById("lastName").value
var email= document.getElementById("email").value
var password= document.getElementById("password").value
var confirmPassword= document.getElementById("confirmPassword").value

console.log("First Name : "+firstName)
console.log("Last Name : "+lastName)
console.log("Email : "+email)
console.log("Password : "+password)
console.log("confirm Password : "+confirmPassword)
// console.log(userSignup)
if(password==confirmPassword){
  userSignup.firstName=firstName
  userSignup.lastName=lastName
  userSignup.email=email
  userSignup.password=password
  alert("Signup Successfull")

  localStorage.setItem('UserData',JSON.stringify(userSignup))
  var getUser=localStorage.getItem('UserData')
  var user=JSON.parse(getUser)
  console.log(user)
}
else{
  alert('Password Doesnot Match')
}
}