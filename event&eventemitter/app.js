const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on('srikanth', (num1, num2) => {
    console.log(num1 + num2)
})

eventEmitter.emit('srikanth', 1, 2)


class person extends EventEmitter {
    constructor(name) {
        super()
        this._name = name
    }
    getname() {
        return this._name
    }
}

let pedro = new person("srikanth")

pedro.on("hello", () => {
    console.log("my name is " +  pedro._name)
})

pedro.emit("hello")