import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';

dotenv.config();

// eslint-disable-next-line
import connectDB from './config/db';
// eslint-disable-next-line
import redis from './middleware/redis.middleware';
// eslint-disable-next-line
import routes from './routes';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(redis);

app.use('/auth', routes.authRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Hello' });
});

const PORT = process.env.PORT || 5000;

export default connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Service is running on port ${PORT}`);
  });
});
