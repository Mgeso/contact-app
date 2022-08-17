/* eslint-disable import/extensions */
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import database from '../config/db.config.js';
import router from '../routes/index.routes.js';

const middleware = (app) => {
  app.use(express.json());
  app.use(morgan('dev'));
  app.use(cors());
  app.use(express.urlencoded({ extended: false }));

  database();
  app.use(router);
};

export default middleware;
