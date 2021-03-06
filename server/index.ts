import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import * as path from 'path';

dotenv.config();

// eslint-disable-next-line
import connectDB from './config/db';
// eslint-disable-next-line
import redis from './middleware/redis.middleware';
// eslint-disable-next-line
import routes from './routes';
const corsOptions = {
  credentials: true,
};

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: true, credentials: true }));
app.use(morgan('dev'));
app.use(cookieParser());
// app.use(redis);

app.use('/auth', routes.authRoutes);
app.use('/user', routes.userRoutes);

// Serve static files from the React frontend app

app.use(express.static(path.join(__dirname, '..', 'client/out')));
// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client/out/index.html'));
});

const PORT = process.env.PORT || 5000;

export default connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Service is running on port ${PORT}`);
  });
});
