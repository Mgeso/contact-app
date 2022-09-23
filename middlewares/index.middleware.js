/* eslint-disable import/extensions */
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import database from '../config/db.config.js';
import router from '../routes/index.routes.js';

import error from './error.middleware.js';

const middleware = (app) => {
  app.use(express.json());
  app.use(morgan('dev'));
  app.use(cors());
  app.use(express.urlencoded({ extended: false }));

  app.get('/', (req, res) => {
    res.status(200).send({
      success: true, message: 'server is up and running'
    });
  });

  database();
  app.use(router);

  app.use(error);
};

export default middleware;
