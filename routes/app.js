
const express = require('express')
const app = express()

//using route

app.get("/", (req, res) => {
    res.send("hello world")
})

//using muiltple routes

app.get("/example", (req, res) => {
    res.send("using multiple routes")
})

//using routes parameter

app.get("/example/:name/:age", (req, res) => {
    console.log(req.params)
    console.log(req.query)
    res.send(req.params.name + " : " + req.params.age)
})

app.listen('3000')