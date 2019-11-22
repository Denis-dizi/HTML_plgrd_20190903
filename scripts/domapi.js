
//W3D5 (2:13:)
function main() { //(2:36:)
    //first we find the element that we will add new elements (2:14:)
    const myApp = document.getElementById("app-1");
    const MAXPAR = 10 //(2:30:)
    //we can style the element
    myApp.style.backgroundColor = "aqua";
    myApp.style.height = "70vh";

    //we can add new elements (children) (2:17:)
    //first we create a new element NOT attached to anything
    /* before changing to "for loop"
    const newP = document.createElement('p'); // (2:19:)
    newP.innerText = "Lorem";
    myApp.appendChild(newP);*/
    for (let i = 0; i < MAXPAR; i++ ){ //(2:27:)
        const newP = document.createElement('p');
        newP.id = "p-"+i;
        newP.classList.add("my-text");
        newP.style.height = (i*2 + 20) + "px"; //(2:31:)
        newP.style.fontSize = 15 + i*3 + "px"; //(2:46:)
        newP.style.backgroundColor = "hsl("+i*360/MAXPAR+", 30%, 40%)"; //(2:33:)
        newP.innerText = "Lorem " +i;
        myApp.appendChild(newP);
    }
}

main(); //(2:36:)

