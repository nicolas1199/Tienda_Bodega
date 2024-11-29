'use strict';
import cors from 'cors';
import morgan from 'morgan';
import express, { json, urlencoded } from 'express';
import indexRoutes from './routes/index.routes.js';
import { HOST, PORT } from './config/configEnv.js';

async function setupServer() {
  try {
    const app = express();

    app.disable('x-powered-by');

    app.use(
      cors({
        credentials: true,
        origin: true,
      }),
    );

    app.use(
      json({
        limit: '1mb',
      }),
    );

    app.use(morgan('dev'));

    app.use(
      urlencoded({
        extended: true,
        limit: '1mb',
      }),
    );

    //routes
    app.use('/api', indexRoutes);

    app.listen(PORT, () => {
      console.log(`Servidor corriendo en ${HOST}:${PORT}/api`);
    });
  } catch (error) {
    console.log('Error en index.js -> setupServer(), el error es: ', error);
  }
}

setupServer();
