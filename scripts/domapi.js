
//W3D5 (2:13:) W4D1 (0:29:)

const CFG = {                                           //W4D1 (0:39:) CFG - config
    MAXPAR : 5,
    backgroundColor: "aqua",
    height: "70vh"
}

function main() { //W3D5(2:36:)
    //first we find the element that we will add new elements W3D5(2:14:)
    const myApp = styleMainParent("#app-1", CFG);      //W4D1 (0:52:) changed radicaly

    createChildren("#app-1");
    createPlainChild('body', 'footer', "(c)2019");          //W4D1 (1:06:)
    //setTimeout(deleteAllChildren, 5000, "#app-1"); //W4D1 (0:33:)
    //if we want to delete immediately: deleteAllChildren('#app-1'); //W3D5(0:30:)

    //adding Event Handlers  v2                               //W4D1 (1:37:)
    const myResetBtn = document.querySelector('#reset-btn');
    myResetBtn.onclick = onResetBtnClick;
    //adding Event Handlers  v3                               //W4D1 (1:40:)
    document.querySelector('#btn-V3').onclick = onBtnV3;
    //arrow syntax example on adding handler underneath
    //adding Event Handlers  v4                               //W4D1 (1:42:)(2:17)
    document.querySelector('#random-btn').onclick = (event) => {
        console.log("Random was clicked");
        //event.target gets me the element responsible for firing the event
        event.target.innerText = "R"+Math.floor(Math.random()*100); //W4D1 (2:19)
    };
    //addEventListener for adding multiple function callbacks
    //adding Event Handlers  v5(v3 pēc VS)                    //W4D1 (1:45:)
    const myUpdateBtn = document.querySelector('#update-btn');
    myUpdateBtn.addEventListener('click', () => {console.log("Updating");});
    myUpdateBtn.addEventListener('click', onUpdateButtonClick);
    myUpdateBtn.addEventListener('click', onResetBtnClick);

    document.onkeydown = (event) => {                         //W4D1 (2:03:)
        //console.log("You pressed keycode: "+ event.code);
        console.log("You pressed key: "+ event.code);
        console.log("Keycode is: "+ event.key);
    }

    //document.onmousemove = (event) => {                        //W4D1 (2:12:)
    document.querySelector('#app-1').onmousemove = (event) => {  //W4D1 (2:15:)
        console.log("Mouse X: "+ event.clientX);
        console.log("Mouse Y: "+ event.clientY);
    }

}

function styleMainParent(selector, mystyle) {                //W4D1 (0:48:)
    //const myApp = document.getElementById("app-1");
    const myApp = document.querySelector(selector);
    myApp.style.backgroundColor = mystyle.backgroundColor;
    myApp.style.height = mystyle.height;
    return myApp;
}

function createChildren(selector){                           //W3D5(0:36:)
    const parent = document.querySelector(selector);
    //we can add new elements (children)                    W3D5(2:17:)
    //first we create a new element NOT attached to anything
    /* before changing to "for loop"
    const newP = document.createElement('p');              // W3D5(2:19:)
    newP.innerText = "Lorem";
    myApp.appendChild(newP);*/
    for (let i = 0; i < CFG.MAXPAR; i++ ) {                //W3D5(2:27:)
        const newP = document.createElement('p');
        newP.id = "p-"+i;
        newP.classList.add("my-text");
        newP.style.height = (i*2 + 20) + "px";              //W3D5(2:31:)
        newP.style.fontSize = 15 + i*3 + "px";              //W3D5(2:46:)
        newP.style.backgroundColor = "hsl("+(i*360/CFG.MAXPAR)+", 30%, 40%)" //(2:33:)
        newP.innerText = "Lorem " +i;
        parent.appendChild(newP);
    }
}

function createPlainChild (selector, tag, text) {              //W4D1 (1:03:)
    const parent = document.querySelector(selector);  
    const newElement = document.createElement(tag);
    newElement.innerText = text;                               //W4D1 (1:08:)
    parent.appendChild(newElement);
}

function deleteAllChildren(selector) {                           //W3D5(0:29:)
    const parent = document.querySelector(selector)
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    console.log("All children should be ---");
}

//Event Handlers v1 (button click) //W4D1 (1:16:)
function onButtonClick() {
    console.log("A 'Click' button was clicked");
    //alert('You clicked Me?!');
}
function onButtonClickAdd() {
    console.log("An 'Add' button was clicked");
    //alert('You want to Add?!');
}
function onButtonClickDelete() {
    console.log("A 'Delete' button was clicked");
    //alert('You wana Delete?!');
}
function onResetBtnClick() { //W4D1 (1:35:)
    console.log("A 'Reset' button was clicked");
    //alert('do You wana to Reset?!');
}
function onBtnV3() { //W4D1 (1:40:)
    console.log("BtnV3 was clicked");
    //alert(' ');
}
function onUpdateButtonClick() { //W4D1 (1:49:)
    console.log("Handling Udate.. (add button v5)");
    //alert(' ');
}


main(); //W3D5(2:36:)

