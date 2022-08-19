/* eslint-disable import/extensions */
import express from 'express';
import contactController from '../controllers/contact.controller.js';
import validator from '../middlewares/validator.middleware.js';
import contactSchema from '../schema/contact.schema.js';

const contactRouter = express.Router();

contactRouter.post(
  '/',
  [
    validator(contactSchema.CreateContactSchema)
  ],
  contactController.createNewContact
);

export default contactRouter;