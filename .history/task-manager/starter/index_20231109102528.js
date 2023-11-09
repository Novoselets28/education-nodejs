const express = require("express");
const app = express()
const routes = require('./routes/tasks')

//routes
app.get('/hello', (req, res) => {
    res.send('Task manager App')
})

app.use('/api/v1/tasks')

const port = 3000

app.listen(port, console.log(`server is listening on port ${port}`))