console.log("Vue script dz");                        //W4D5 (2:15:)

const app = new Vue({
    el : "#app1", //here we define root element (parent) where we will hold our app
    data : {
        message : "RCS",
        warning : "leopard",
        created : "This was made on " + new Date().toLocaleString(), //W4D5 (2:23:)(24)
        seen : true,                                 //W4D5 (2:32:)
        todos: [                                     //W4D5 (2:34:)
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
          ]

    },
    methods : {                                      //W4D5 (2:40:)
        reverseMessage : function() {
            //another bit of magic this.message is mapped to this.data.message
            console.log("Reversing Message");
            this.message = this.message.split('').reverse().join('');
        }
    }



})

//  https://vuejs.org/v2/guide/