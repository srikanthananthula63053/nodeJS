const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const Joi = require("joi")

const app = express()

app.use("/public", express.static(path.join(__dirname, "static")))

app.use(bodyParser.urlencoded({ extended: false }))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "static", "index.html"))
})

app.post("/", (req, res) => {
    console.log(req.body)  // should be req.body, not res.body

    // Joi validation schema
    const schema = Joi.object({
        email: Joi.string().trim().email().required(),
        password: Joi.string().min(6).max(10).required()
    })
    const { error, value } = schema.validate(req.body)

    if (error) {
        return res.send("An error has occurred: " + error.details[0].message)
    }

    console.log(value)
    res.send("Successfully logged in")

})


app.listen("3000")









