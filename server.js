/* eslint-disable import/extensions */
import express from 'express';
import dotenv from 'dotenv';
import middleware from './middlewares/index.middleware.js';

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();
middleware(app);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Server is listening on port', port);
});
