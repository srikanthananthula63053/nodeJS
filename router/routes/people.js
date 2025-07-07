const express = require('express')
const route = express.Router()

route.use((req, res, next) => {
    console.log("middle ware is use")
    next()
})
route.get("/", (req, res) => {
    res.send("routes")
})

route.get("/example", (req, res) => {
    res.send("routes with another path")
})

module.exports = route