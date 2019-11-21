
//W3D5 (2:13:)
//first we find the element that we will add new elements
const myApp = document.getElementById("app-1");
const MAXPAR = 10 //(2:30:)
//we can style the element
myApp.style.backgroundColor = "aqua";
myApp.style.height = "70vh";

//we can add new elements (children)
//first we create a new element NOT attached to anything
/* before changing to "for loop" (2:27:)
const newP = document.createElement('p');
newP.innerText = "Lorem";
myApp.appendChild(newP);*/
for (let i = 0; i < MAXPAR; i++ ){
    const newP = document.createElement('p');
    newP.id = "p-"+i;
    newP.classList.add("my-text");
    newP.innerText = "Lorem " +i;
    myApp.appendChild(newP);
}
