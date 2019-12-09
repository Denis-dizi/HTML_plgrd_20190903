console.log("Going to alert");
// alert ("Achtung!");
console.log ("I have alerted!");
document.body.style.backgroundColor = "lightblue";

var a =20;
var b = 30 - a;
var c = b * a;
console.log("My variables: "+ a, b, c);
console.log(a, b, c);

var myDiv = document.getElementById('output');
//Javascript lets me add strings with numbers,
//meaning JS converts number to string then concatanetes two strings
myDiv.innerText = "My Variables: " + a + " : " + b + " : " +c;
