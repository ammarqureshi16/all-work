// TO DO List
var inputValue = document.getElementById("input");
console.log(inputValue);
// Styleing
inputValue.style.backgroundColor = "black";
inputValue.style.color = "white";
inputValue.style.padding = "9px";
inputValue.style.border = "none";
// Add Item
function addItem() {
  var inputValue = document.getElementById("input");
  console.log(inputValue);
  var ul = document.getElementById("ul");
  var listItem = document.createElement("li");
  ul.appendChild(listItem);
  listItem.innerHTML = "<span/>" + inputValue.value;
  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = " Delete ";
  // Styleing
  deleteButton.style.backgroundColor = "Black";
  deleteButton.style.color = "white";
  deleteButton.style.width = "53px";
  deleteButton.style.height = "30px";
  deleteButton.style.border = "none";
  deleteButton.style.borderRadius = "6px";

  var editButon = document.createElement("button");
  editButon.innerHTML = " Edit ";
  // Styleing
  editButon.style.backgroundColor = "red";
  editButon.style.color = "white";
  editButon.style.width = "53px";
  editButon.style.height = "30px";
  editButon.style.border = "none";
  editButon.style.borderRadius = "6px";

  editButon.setAttribute("onClick", "editItem(event)");
  deleteButton.setAttribute("OnClick", "deleteItem(event)");
  listItem.appendChild(editButon);
  listItem.appendChild(deleteButton);
  inputValue.value = "";
}
// Delete Item
function deleteItem(event) {
  var listItem = event.target.parentElement;
  listItem.remove();
}
// Edit Item
function editItem(event) {
  console.log(event);
  var valueElement = event.target.parentElement.children[0];
  console.log(valueElement);
  document.getElementById("input").value = valueElement.innerHTML;
  valueElement.setAttribute("id", "currentItem");
  var button = document.getElementById("inputDiv").children[1];
  button.innerHTML = " Update ";
  button.setAttribute("onClick", "updateItem(event)");
  console.log(button);
  //   Styleing
  button.style.backgroundColor = "darkblue";
  button.style.color = "white";
  button.style.width = "70px";
  button.style.height = "30px";
  button.style.border = "none";
  button.style.borderRadius = "6px";
}
// UpdateItem
function updateItem(event) {
  var currInput = document.getElementById("input");
  console.log(currInput);
  var spanElement = document.getElementById("currentItem");
  spanElement.innerHTML = currInput.value;
  currInput.value = "";
  var button2 = document.getElementById("inputDiv").children[1];
  button2.innerHTML = " Add ";
  button2.setAttribute("onClick", "addItem(event)");
}
