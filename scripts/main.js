console.log("Going to alert");           //W3D1; W3D2
// alert ("Achtung!");
console.log ("I have alerted!");
document.body.style.backgroundColor = "lightblue";

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