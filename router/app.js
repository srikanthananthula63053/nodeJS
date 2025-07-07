const express = require('express')
const app = express()
const people = require("./routes/people")

// Corrected path: added '/' before 'people'
app.use("/people", people)

app.listen(3000)
