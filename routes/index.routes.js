import express from 'express'
import contactRouter from './contact.js';
const router = express.Router();

router.use('/contacts',contactRouter )


export default router