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
//$(document).ready(main);

// alternativa bez jQuery/ in a modern browser it would be something like this //W4D2 (1:52)
document.addEventListener('DOMContentLoaded', main, false);

function main() {  
    console.log("Running main!");
    $("h1").css("background-color", "green");
    $(".my-txt").css("background-color", "aqua");
  };

