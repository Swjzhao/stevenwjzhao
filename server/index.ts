import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('dev'));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.json({msg: 'Hello'})
})

import './config/db'

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Service is running on port ${PORT}`);
})