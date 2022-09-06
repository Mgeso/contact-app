/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import express from 'express';
import contactRouter from './contact.route.js';
import usersRouter from './user.route.js';

const router = express.Router();

router.use('/contacts', contactRouter);
router.use('/users', usersRouter);

export default router;
