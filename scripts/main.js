//console.log("Going to alert");           //W3D1; W3D2
// alert ("Achtung!");
console.log ("I have alerted!");
document.body.style.backgroundColor = "lightblue";

//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/stand-in-line
// stand in line (New added at back of queue old taken off from front of queue.)
function nextInline(arr, item) {            //W3D2 (1:42:)
    arr.push(item);
    return arr.shift()+" "+JSON.stringify(arr);
    //return arr.push();
}
console.log("Next inline: " + nextInline([2,5,6,7,8], 4));

var globObj = {                    //W3D3 (2:04:)
    "hat": "ballcap",
    "lovely shirt": "jersey",
    "shoes": "cleats",
    "car": {                      //W3D3 (2:49:)
        "inside": {
          "glove box": "maps",
          "passenger seat": "crumbs"
         },
        "outside": {
          "trunk": "jack"
        }
    }
}

//var  vs  let.   Let - mainīgie eksistē tikai {}-ās
function loopTest() {               //W3D4 (2:03:)
    for(var i=0; i<3; i++) {
        console.log('i: ', i);
    }
    console.log("i is alive: ", i);
    for(let j=0; j<3; j++) {
        console.log('j: ' + j);
    }
    //console.log("j not alive.", j); //Console: "j is not defined"
}

//let vs const. Const by default, unless know will need to reassign the value. Only in that case use let.
const s = [5, 7, 2];               //W3D5 (1:19:)
s.unshift(s.pop());
console.log("from [5,7,2] to: "+JSON.stringify(s));

function main2(){
    // funkciju pierakstīšanas veidi
    //Arrow Functions - Anonymous func. 		//W3D5(1:23:)
    function mymag(){              //Nr1
        return new Date();
    }
    console.log(mymag());

    var magic = function (){       //Nr2
        return new Date();
    }
    console.log(magic());

    const myf = () => {             //Nr3      //W3D5(1:28:)
        console.log("Badac");
        return "Wow";
    }
    myf();// retutns only Badac
    console.log(myf()); // returns both

    const myFunc = () => "hmmm";    //Nr4
    console.log(myFunc());

    const add1 = (a,b) => a+b;
    console.log(add1(4,76));

    //function add2(a,b) {return a+b;}
    function add2(a,b) {    // the same as above
        return a+b;
    }
    console.log(add2(4,86));
}   //call the func to see results

function main3(){
    // array.filter()		//W3D5(1:35:)
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
    const result = words.filter(word => word.length > 6);
    console.log(result);
    // expected output: Array ["exuberant", "destruction", "present"]

    let res2 = [];       // the same as above
    for (let i = 0; i < words.length; i++) { //words.length - length of arr "words";
        if (words[i].length > 6) {  // words[i].length - length of arrays element.
            res2.push(words[i]);
        }
    }
    console.log(res2);



    // array.map()		//W3D5(1:42:)
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    const array1 = [1, 4, 9, 16];
    const map1 = array1.map(x => x * 2); // pass a function to map
    console.log(map1);
    // expected output: Array [2, 8, 18, 32]
  

    //izveidot jauno masivo ar kvadratiem, kas nak no para skaitliem //W3D5(1:43:):
    let = mynumbers = [1,2,3,4,5,6,7,8,9,10];

    const myarr2 = mynumbers.filter(n => n%2 === 0).map(x => x**2);
    console.log(myarr2);
    // expected output: Array [4, 16, 36, 64, 100]
    // (n => n%2 === 0) - para skaitli; (x => x**2) - kvadrataa

    function myfilter(n) {
        return n % 2 === 0;
    }
    const myarr3 = mynumbers.filter(myfilter).map(x => x**2);
    console.log(myarr3);

    let myarr1 = [];
    for (let i = 0; i < mynumbers.length; i++) {
        if (mynumbers[i] % 2 === 0) {
            myarr1.push(mynumbers[i]**2);
        }
    }
    console.log(myarr1);








}   //call the func to see results


function main() {
    var a =20;
    var b = 30 - a;
    var c = b * a;
    console.log("My variables: "+ a, b, c);
    console.log(a, b, c);
    // #one way of obtaining element by ID
    var myDiv = document.getElementById('output'); //W3D1(1:05:)
    //Javascript lets me add strings with numbers,
    //meaning JS converts number to string then concatanetes two strings
    myDiv.innerText = "My Variables: " + a + " : " + b + " : " +c;

  //Accessing Object Properties                    //W3D3 (2:04:)(2:49:)
  console.log ("Acces global obj1.: " + globObj.hat);
  console.log ("Acces global obj2.: " + globObj["lovely shirt"]);
  console.log ("Accessing nested obj.: " + globObj.car.inside["glove box"]);

  loopTest();                                     //W3D4 (2:03:)

    var myName = " DiZi ";                        //W3D1(1:59:)
    var myStr = document.getElementById('p1');
    //myDiv.innerText = myStr;
    myStr.innerText = "My name is" + myName + "and I am well.";

    var myNoun = "dog";                        //W3D1(2:32:)
    var myAdjective = "big";
    var myVerb = "ran";
    var myAdverb = "quickly";
    var wordBlanks = "My " + myAdjective + " "+ myNoun +" "+ myVerb +" "+ myAdverb +".";
    console.log(wordBlanks);
    var myWrldb = document.getElementById('p2');
    //myDiv.innerText = myStr;
    myWrldb.innerText = wordBlanks;

    var myList = [                            //W3D2 (0:13:)
        ["Chocolate Bar", 15, "Buy"],
        ["Bounty", 3, "Eat"],
        ["Twix", 9, "Hide"]
    ];
    // #second way of obtaining element using query
    var resDiv = document.querySelector('#results');
    //quick & dirty way of modifying HTML inside the elemnt
    //for more complicated HTML better to add elements discretely
    resDiv.innerHTML = JSON.stringify(myList);
    // resDiv.innerText = myList;
    // resDiv.innerHTML +="<hr>" +Date.now();  //W3D2 (0:13:)
    resDiv.innerHTML +="<br><br>" + Date() + "<hr>";



    //https://canonium.com/articles/javascript-date-and-time/
    var tm = new Date();
    var resTxt = '';
        resTxt += "Time " + tm.getHours() + ":"
            + tm.getMinutes() + ":" + tm.getSeconds() + ", ";
        resTxt += "Date: " + tm.getDate() + "." + (tm.getMonth() + 1)
            + "." + tm.getFullYear();
    console.log(resTxt);

    var resTime = document.getElementById('time');
    resTime.innerText = resTxt;



    //http://ab-w.net/JS/js_script_time.php
    function startTime(){
        var tm=new Date();
        var h=tm.getHours();
        var m=tm.getMinutes();
        var s=tm.getSeconds();
        m=checkTime(m);
        s=checkTime(s);
        //document.getElementById('#results').innerHTML=h+":"+m+":"+s;
        t=setTimeout('startTime()',500);
        }
        function checkTime(i){
                if (i<10){
                i="0" + i;
                }
            return i;
        }
    // console.log(startTime);
    // console.log(h+":"+m+":"+s);
    // resDiv.innerHTML +="<br> Time: " + startTime();
    // resDiv.innerHTML +="<br> Time: " + h+":"+m+":"+s;
    // var resTime = document.getElementById('#time');
    // resTime.innerText = "resTxt";
}

//This will get executed when we load our page
console.log("Going to run main function");
main();