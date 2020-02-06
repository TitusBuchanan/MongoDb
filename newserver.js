require('dotenv').config();
const mongoose = require('mongoose');

const express = require('express');
const app = express();


mongoose.connect(process.env.TITUS , { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("TEEZUS is connected to MongoDB"))
    .catch((err) => console.error("You fucked Up , T", err))


    app.use(express.json())

const GraduatesRouter = require('./routes/graduates');
app.use('/graduates', GraduatesRouter);

app.listen(3000, () => console.log('Teezus has started the server'));