import express from 'express';
import mongoose from 'mongoose';
import config from './config.js';
import { configureRouter } from './api/router.js';
import './dependencies.js';
import errorMiddleware from '../middleware/error_middlewares.js';
import checkAuthorizationTokenMiddleware from '../middleware/check_authorization_token_middleware.js';
import logMiddleware from '../middleware/log_middleware.js';
// import bcrypt from 'bcrypt';


// console.log('Hash de 1234:', await bcrypt.hash('1234', 10));

try {
  const app = express();

  app.use(express.json());
  app.use(logMiddleware);
  app.use(checkAuthorizationTokenMiddleware);

  const apiRouter = express.Router();
  app.use('/api', apiRouter);
  configureRouter(apiRouter);

  app.use(errorMiddleware);

  await mongoose.connect(config.dbConnectionString);
  console.log('Connected to MongoDB');

  app.listen(config.port, () => {
    console.log(`Server escuchando en http://localhost:${config.port}`);
  });
} catch (error) {
  console.error('Error al conectar a MongoDB:', error);
}