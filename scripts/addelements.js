console.log("Will add some elements on demand (по требованию) W5D1"); //W5D1 (0:05:)

const addBtn = document.querySelector(".addelements");
addBtn.onclick = (event) => {
    console.log("clicked ADD btn");
    const inputField = document.querySelector("#el-count-1")
    console.log("Going to add this el-s: " + inputField.value);

    //add elements
}

function addElement (parent, tags, props) {
    console.log ("Adding a new element");
    
}