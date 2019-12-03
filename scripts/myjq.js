//created W4D2 (1:35:)

/* anonima funkcija                           //W4D2 (1:46:)
jQuery mega funkcijai ($) esam iedevuši dokumentu; 
.ready - specify a func to execute after the DOM is ready 
(ready metode pieprāsa funkciju()): */

// $(document).ready(function() {  
//     $("h1").css("background-color", "green");
//     $(".my-txt").css("background-color", "aqua");
//   });


//run main only when document is ready
$(document).ready(main);

// alternativa bez jQuery
// in a modern browser it would be something like this //W4D2 (1:52)
// but jQuery also supports older browsers with onload etc handlers
//document.addEventListener('DOMContentLoaded', main, false);

const myobj = {                            //W4D3 (0:42)
  a : 2,
  b : 3,
  total : undefined,
  //functions are first class citizens we can pass them and assign them
  add : adder

}

function adder(c){
  this.total = this.a + this.b + c;
  console.log("Total is", this.total);
} 


function main() {  
    console.log("Running main!");
    $("h1").css("background-color", "green");
    $(".my-txt").css("background-color", "aqua");

    //$("p").removeClass("my-txt");            //W4D2 (2:23)
    $(".my-txt").css("color", "blue");         //W4D2 (2:26)

    $("#b2").prop("disabled", true);            //W4D2 (2:29)
    $("#b5").prop("disabled", true);            //W4D2 (2:29)
    $("#b5").prop("disabled", false);            //W4D2 (2:29)

    //$("p").remove();                          //W4D2 (2:36)
    $("p").after("<p> more text </p>");         //W4D3 (0:31)
    $("p").after("<p> Even more text </p>");    //W4D3 (0:31)

    //add listeners to buttons                  //W4D3 (0:32)
    // $(".my-btn").click(function() {             //W4D3 v1 (0:38)
    //   console.log("My ID is: " + $(this).attr('id'));
    // })
    $(".my-btn").click(function(event) {        //W4D3 v2 (0:39)
      console.log("My ID is: " + $(this).attr('id'));

      //we could use standart Javascript DOM api to get id
      console.log("Target is: " +event.target.id);

      console.log("Testing this ", this.id);     //W4D3 v3 (0:41)
    })

    myobj.add(20);       //const myobj = {       //W4D3 (0:42)(46)
  };

