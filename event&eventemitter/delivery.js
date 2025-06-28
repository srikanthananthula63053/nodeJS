const EventEmitter = require('events');

// Create a class that extends EventEmitter
class Zomato extends EventEmitter {
    constructor() {
        super(); // ✅ Initialize EventEmitter in the subclass
    }
}

// Create an instance of the Zomato class
const zomato = new Zomato();

// Set up listeners
zomato.on("orderPlace", (order) => {
    console.log(`Order food: ${order.item}`);
});

zomato.emit("orderPlace", { item: "Paneer", user: "user" });

zomato.on("delivery", (code) => {
    console.log(`Order delivered: ${code}`);
});

zomato.emit("delivery", "ZMNT122");
