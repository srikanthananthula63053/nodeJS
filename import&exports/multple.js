const sum = (num1, num2) => num1 + num2

const PI = 3.14

class smallObject {
    constructor() {
        console.log("object is created")
    }
}

module.exports = { sum: sum, PI: PI, smallObject: smallObject }