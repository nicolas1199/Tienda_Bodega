  'use strict';
  import cors from 'cors';
  import morgan from 'morgan';
  import express, { json, urlencoded } from 'express';
  import session from 'express-session';
  import MySQLStore from 'express-mysql-session';
  import indexRoutes from './routes/index.routes.js';
  import {
    DATABASE,
    DB_HOST,
    DB_PASSWORD,
    DB_PORT,
    DB_USERNAME,
    HOST,
    PORT,
  } from './config/configEnv.js';
  import mysql from 'mysql2/promise';

  const MySQLStoreImport = MySQLStore(session);

<<<<<<< HEAD
  async function setupServer() {
    try {
      const app = express();
=======
const options = {
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USERNAME,
  password: DB_PASSWORD,
  database: DATABASE,
};

const connection = await mysql.createConnection(options);

export const sessionStore = new MySQLStoreImport({}, connection);

async function setupServer() {
  try {
    const app = express();
>>>>>>> b511a7ce1c424ffd9bd0f1d7bb02617d83ecfa0d

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

<<<<<<< HEAD
      const options = {
        host: DB_HOST,
        port: DB_PORT,
        user: DB_USERNAME,
        password: DB_PASSWORD || '', // Forzamos el uso de cadena vacía si es necesario
        database: DATABASE,
      };

      const connection = await mysql.createConnection(options);

      const sessionStore = new MySQLStoreImport({}, connection);

      app.use(
        session({
          secret: 'Super Secreto',
          saveUninitialized: false,
          resave: false,
          store: sessionStore,
          httpOnly: false,
          cookie: {
            maxAge: 600000 * 60,
            secure: false,
          },
          domain: 'localhost',
        }),
      );
=======
    app.use(
      session({
        name: 'sessionID',
        secret: 'Super Secreto',
        saveUninitialized: false,
        resave: false,
        store: sessionStore,
        cookie: {
          httpOnly: false,
          maxAge: 600000 * 60,
          secure: false,
          sameSite: 'lax',
        },
      }),
    );
>>>>>>> b511a7ce1c424ffd9bd0f1d7bb02617d83ecfa0d

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
