const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://Artem:6V78UF3mseYCdfA9@cluster0.tm9ejlp.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority'

const connectDB = (url) =>{
    return mongoose
    .connect(connectionString)
    .then(()=>console.log('Connected to the DB...'))
    .catch((err)=>console.log(err))
}

module.exports = connectDB
