import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import listRouter from './routes/todo.js';
import userRouter from './routes/user.js';

// initialize express app
const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send("Welcome to To Do Backend!");
})

// add routes
app.use('/list', listRouter);
app.use('/user', userRouter);
// var CONNECTION_URL = 'mongodb://127.0.0.1:27017/todo';


const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((err) => console.log(err.message));

