console.log("Started classes");
// https://javascript.info/class


class User {         //W4D5 (1:45:) created 
    counter = 0;

    constructor (newName) {
        this.name = newName;
    }

    sayHi() {
        console.log("Hello", this.name, "for the", this.counter, "time");
        this.counter++;
    }
}

//Classes are basically syntactic sugar over regular JavaScript object
const obj = {                          //W4D5 (1:53:)
    counter : 0,
    constructor : function(newName) {
        this.name = newName;
    },
    sayHi : function() {
        console.log("Hello", this.name, "for the", this.counter, "time");
        this.counter++;
    }
}
obj.constructor("user2");                //W4D5 (1:54:)
obj.sayHi();
obj.sayHi();
obj.sayHi();


const usr = new User("user1");          //W4D5 (1:49:)
usr.sayHi();
usr.sayHi();
usr.sayHi();

const usr2 = new User("user2-1");          //W4D5 (1:55:)
usr2.sayHi();
usr2.sayHi();
usr2.sayHi();