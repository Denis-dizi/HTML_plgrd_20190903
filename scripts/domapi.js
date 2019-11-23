
//W3D5 (2:13:) W4D1 (0:29:)

const CFG = {   //W4D1 (0:39:) CFG - config
    MAXPAR : 5,
    backgroundColor: "aqua",
    height: "70vh"
}

function main() { //(2:36:)
    //first we find the element that we will add new elements (2:14:)
    const myApp = styleMainParent("#app-1", CFG);  //W4D1 (0:52:) changed radicaly

    createChildren("#app-1");
    setTimeout(deleteAllChildren, 5000, "#app-1"); //W4D1 (0:33:)
    //if we want to delete immediately: deleteAllChildren('#app-1'); //(0:30:)
}

function styleMainParent(selector, mystyle) {        //W4D1 (0:48:)
    //const myApp = document.getElementById("app-1");
    const myApp = document.querySelector(selector);
    myApp.style.backgroundColor = mystyle.backgroundColor;
    myApp.style.height = mystyle.height;
    return myApp;
}

function createChildren(selector){    //(0:36:)
    const parent = document.querySelector(selector);
    //we can add new elements (children) (2:17:)
    //first we create a new element NOT attached to anything
    /* before changing to "for loop"
    const newP = document.createElement('p'); // (2:19:)
    newP.innerText = "Lorem";
    myApp.appendChild(newP);*/
    for (let i = 0; i < CFG.MAXPAR; i++ ) { //(2:27:)
        const newP = document.createElement('p');
        newP.id = "p-"+i;
        newP.classList.add("my-text");
        newP.style.height = (i*2 + 20) + "px"; //(2:31:)
        newP.style.fontSize = 15 + i*3 + "px"; //(2:46:)
        newP.style.backgroundColor = "hsl("+(i*360/CFG.MAXPAR)+", 30%, 40%)" //(2:33:)
        newP.innerText = "Lorem " +i;
        parent.appendChild(newP);
    }
}

function deleteAllChildren(selector) {  //(0:29:)
    const parent = document.querySelector(selector)
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    console.log("All children should be ---");
}


main(); //(2:36:)

