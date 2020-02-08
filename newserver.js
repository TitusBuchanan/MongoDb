require('dotenv').config();
const mongoose = require('mongoose');

const express = require('express');
const app = express();
const GraduatesRouter = require('./routes/graduates');
app.use('/graduates', GraduatesRouter);

mongoose.connect(process.env.TITUS , { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("TEEZUS is connected to MongoDB"))
    .catch((err) => console.error("You fucked Up , T", err))


    app.use(express.json())



app.listen(3000, () => console.log('Teezus has started the server'));