console.log("Will add some elements on demand (по требованию) W5D1"); //W5D1 (0:05:)
main();


function main() {                                                    //W5D1 (0:45:) refactored
    const addBtn = document.querySelector(".addelements");           //W5D1 (0:10:)
        addBtn.onclick = (event) => {
        console.log("clicked ADD btn");
        const inputField = document.querySelector("#el-count-1")     //W5D1 (0:11:)
        console.log("Going to add this el-s: " + inputField.value);

        //add elements
        const mainCont = document.querySelector("#main-cont-1");     //W5D1 (0:16:)
        for (let i = 0; i < inputField.value; i++) {                 //W5D1 (0:18:)
            //==== v2 =================================================================
            //Simple example of adding an element inline without addElement function(:55)
            const newEl = document.createElement('p');               //W5D1 (0:50:)
            newEl.id = "my-id-"+ (i+1);                
            newEl.classList.add("my-class"); //(:51:)we might need different classes *hint
            //you can see how without parenthesis the innerText is not quite what we wanted : )
            //JS converts txt with number into text
            newEl.innerText = "Lorem " + i + 1;                     //W5D1 (0:51:)
            mainCont.appendChild(newEl);
            
            //==== v1 better than v2.==================================================
            //Full Example on how to add new elem with prop         //W5D1 (0:49:) anul-ed
            //for (let i = 0; i < inputField.value; i++) {          //W5D1 (0:18:)(35)
            // addElement(mainCont, "p", {                          //W5D1 (0:19:)
            //     content : "Lorem", 
            //     id : "el-" +i,
            //     myClasses : ['red-txt', 'my-txt']
            //     })
            //=========================================================================
            }
        }

        const delBtn = document.querySelector(".del-elements");      //W5D1 (0:40:)
        //main difference between regular function and arrows is the scope of this
        delBtn.onclick = function (event) {
            deleteAllElements(document.querySelector("#main-cont-1")); //W5D1 (0:42:)
        }
}

//======Add Elements===================================================================
function addElement (parent, tag, props) {                          //W5D1 (0:15:)
    console.log ("Adding a new element");
    const newEl = document.createElement(tag);                      //W5D1 (0:22:)
    newEl.innerText = props.content;                                //W5D1 (0:24:)
    newEl.id = props.id;
    if (props.hasOwnProperty('myClasses ')) {                       //W5D1 (0:26:)
        //new ES6 spread operator destructor for our array into parameters
        //so [1, "foo", "bar"] becomes 1, "foo", "bar"              //W5D1 (0:32:)
        // https://stackoverflow.com/questions/1988514/javascript-css-how-to-add-and-remove-multiple-css-classes-to-an-element/36117848
        newEl.classList.add(...props.myClasses);                    //W5D1 (0:29:)(32)
    }
    parent.appendChild(newEl);                                      //W5D1 (0:30:)
}

//======Delete all Elements============================================================
function deleteAllElements(parent) {                                //W5D1 (0:37:)
console.log("Deleting all children");
//https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild
//To remove all children from an element:                           //W5D1 (0:38:)
while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
    }
}
//=====================================================================================