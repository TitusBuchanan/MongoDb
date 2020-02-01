require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();


mongoose.connect(process.env.TITUS , { useNewUrlParser: true , useUnifiedTopology: true })
const db = mongoose.connection
db.on('error',(error) => console.error(error))
db.once('open',() => console.log('Teezus is Connected to the database'))


app.use(express.json())

const subscribersRouter = require('./routes/subscribers');
app.use('/subscribers', subscribersRouter)


app.listen(3001, () => console.log (`Teezus has connected to MongoDb`,))