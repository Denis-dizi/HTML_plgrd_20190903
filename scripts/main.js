console.log("Going to alert");              //W3D1
// alert ("Achtung!");
console.log ("I have alerted!");
document.body.style.backgroundColor = "lightblue";

var a =20;
var b = 30 - a;
var c = b * a;
console.log("My variables: "+ a, b, c);
console.log(a, b, c);
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