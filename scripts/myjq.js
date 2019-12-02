//created W4D2 (1:35:)

/* anonima funkcija W4D2 (1:46:)
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

function main() {  
    console.log("Running main!");
    $("h1").css("background-color", "green");
    $(".my-txt").css("background-color", "aqua");

    //$("p").removeClass("my-txt"); //W4D2 (2:23)
    $(".my-txt").css("color", "blue"); //W4D2 (2:26)

    $("#b2").prop("disabled", true); //W4D2 (2:48)
    $("#b5").prop("disabled", true); //W4D2 (2:48)
    $("#b5").prop("disabled", false); //W4D2 (2:48)
  };

