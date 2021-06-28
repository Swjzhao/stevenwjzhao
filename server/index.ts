import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import dotenv from 'dotenv';
import redis from './middleware/redis.middleware';
import routes from './routes';

// eslint-disable-next-line
dotenv.config();

// eslint-disable-next-line
import connectDB from './config/db';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('dev'));
app.use(cookieParser());

app.use(redis);

app.use('/auth', routes.authRoutes);

app.get('/', (req, res) => {
  res.json({ msg: 'Hello' });
});

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Service is running on port ${PORT}`);
});
