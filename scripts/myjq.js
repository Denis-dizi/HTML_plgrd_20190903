//created W4D2 (1:35:)

/* anonima funkcija                                    //W4D2 (1:46:)
jQuery mega funkcijai ($) esam iedevuši dokumentu; 
.ready - specify a func to execute after the DOM is ready 
(ready metode pieprāsa funkciju()): */

//=========1-st way to write func=================================================

// $(document).ready(function() {                       //W4D2 (1:46:)
//     $("h1").css("background-color", "green");        //W4D2 (1:36:)
//     $(".my-txt").css("background-color", "aqua");    //W4D2 (1:38:)
//   });
//=========2-nd way to write func=================================================

//run main only when document is ready                   //W4D2 (1:47:)
// $(document).ready(main);

// function main() {                                     //W4D2 (1:47:)
//   console.log("Running main!");
//   $("h1").css("background-color", "green");           //W4D2 (1:36:)
//   $(".my-txt").css("background-color", "aqua");       //W4D2 (1:38:)
// }
//=====bez jQuery ready - alternativa ============================================

// in a modern browser it would be something like this         //W4D2 (1:52)
// but jQuery also supports older browsers with onload etc handlers //W4D2 (1:53)
//document.addEventListener('DOMContentLoaded', main, false);  //W4D2 (1:52)

// function main() {                                     //W4D2 (1:47:)
//   console.log("Running main!");
//   $("h1").css("background-color", "green");           //W4D2 (1:36:)
//   $(".my-txt").css("background-color", "aqua");       //W4D2 (1:38:)
// }
//================================================================================

//run main only when document is ready                //W4D2 (1:47:)
$(document).ready(main);

let user = {                                          //W4D3 (1:10)(1:19-ka lasit)
  // https://javascript.info/object-methods
  name: "John",
  age: 30,
  //shorthand for adding function object. same as:
  //sayHi : function () { //do stuff
  sayHi () {                                         //W4D3 (1:18-ka lasit)
    // "this" is the "current object"
    //alert(this.name);
    console.log("My name is", this.name, "(by this)");
    //Without this is not as safe as user could have been changed
    console.log("My name is", user.name, "(by user)");
    
    //arrow function do not have their own this, they use their parents this
    const arrfun = () => {                            //W4D3 (1:15)(18)
      console.log("My a is:", this.a);
    }
    arrfun();
  },

  a : 3333                                            //W4D3 (1:11)
};
user.sayHi();                                         //W4D3 (1:10)
//user.arrfun();
//================================================================================

const myobj = {                               //W4D3 (0:42)(46-skaidrojums)
  a : 2,
  b : 3,
  total : undefined,
  //functions are first class citizens we can pass them and assign them
  add : adder,                                //W4D3 (0:42)
  a2 : add2,                                  //W4D3 (0:47)

  a3 : function (n) {                          //W4D3 (0:49)
    this.total += n;
  }
}

const o2 = {                                  //W4D3 (0:49)
  a : 3, 
  b : 5,
  total : 20,
  oadd : adder
}

//Doma tāda: funkc. var pielikt daž. obj-iem (piem.: myobj; o2)  //W4D3 (0:42)
//funkcija 'adder' izsaukta 3-jos veidos              //W4D3 (0:53)
function adder(c){                            //W4D3 (0:42)
  this.total = this.a + this.b + c;
  console.log("Total is: ", this.total);
} 

function add2(i, j) {                          //W4D3 (0:47)
  return i+j;
}

//skat. beigaas izsauktus:
//myobj.add(20);       //const myobj = {       //W4D3 (0:42)(46)
//o2.oadd(50);         //const o2 = {          //W4D3 (0:49)(50)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
//================================================================================

function main() {                                 //W4D2 (1:47:)
    console.log("Running main!");
    console.log("<p> quant.: " + document.querySelectorAll("p").length);   //W4D3 (0:31)
    //quantity through Console is different

    $("h1").css("background-color", "green");     //W4D2 (1:36:)
    $(".my-txt").css("background-color", "aqua"); //W4D2 (1:38:)

    //$("p").removeClass("my-txt");            //W4D2 (2:23)
    $(".my-txt").css("color", "blue");         //W4D2 (2:26)

    // "b1" disabled in HTML
    $("#b2").prop("disabled", true);            //W4D2 (2:29)
    $("#b5").prop("disabled", true);            //W4D2 (2:29)
    $("#b5").prop("disabled", false);           //W4D2 (2:29)

    // $("p").remove();                          //W4D2 (2:36)

    // add <p>:
    // $("p").after("tx <span> more text </span>");  //W4D3 (0:30)
    $("p").after("<p> more text </p>");         //W4D3 (0:31)
    $("p").after("<p> Even more text </p>");    //W4D3 (0:31)

    //add listeners to buttons:                 //W4D3 (0:32)
    $(".my-btn3").click(function() {            //W4D3 v1 (0:38)
      console.log("My ID is: " + $(this).attr('id'));
    })
    $(".my-btn").click(function(event) {        //W4D3 v2 (0:39)
      console.log("My ID is: " + $(this).attr('id'), " /by (this).attr/");
      //we could use standart Javascript DOM api to get id
      console.log("Target is: " +event.target.id, " /by event/"); //W4D3(0:40)
      console.log("Testing this ", this.id, " /by this/");     //W4D3 v3 (0:41)
    })

    myobj.add(20);       //const myobj = {       //W4D3 (0:42)(46)
    o2.oadd(50);         //const o2 = {          //W4D3 (0:49)(50)
   
  };

main.a = 100;   //skaidrojums:                   //W4D3 (0:59)
main.b = 200;
main.total = 0;
main.add = adder;
main.add(23);

let a = [6, 9];                                  //W4D3 (1:01)
a.b = 10;
console.log(a, a.b);
