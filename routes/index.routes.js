/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import express from 'express';
import contactRouter from './contact.route.js';

const router = express.Router();

router.use('/contacts', contactRouter);

export default router;
