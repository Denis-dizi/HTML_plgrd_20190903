console.log("Vue script dz");       //W4D5 (2:15:)

const app = new Vue({
    el : "#app1", //here we define root element where we will hold our app
    data : {
        message : "RCS",
        warning : "leopard",
        created : "This was made on " + new Date().toLocaleString() //W4D5 (2:23:)

    }



})