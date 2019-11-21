

//first we find the element that we will add new elements
const myApp = document.getElementById("app-1");

//we can style the element
myApp.style.backgroundColor = "aqua";
myApp.style.height = "70vh";

//we can add new elements (children)
//first we create a new element NOT attached to anything
const newP = document.createElement('p');
newP.innerText = "Lorem";
myApp.appendChild(newP);
