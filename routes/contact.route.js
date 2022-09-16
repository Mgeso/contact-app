/* eslint-disable import/extensions */
import express from 'express';
import contactController from '../controllers/contact.controller.js';
import validator from '../middlewares/validator.middleware.js';
import contactSchema from '../schema/contact.schema.js';
import authentication from '../middlewares/auth.middleware.js';

const contactRouter = express.Router();

contactRouter.get('/:userId', authentication, contactController.getAllContacts);

contactRouter.post(
  '/',
  [
    validator(contactSchema.CreateContactSchema),
    authentication
  ],
  contactController.createNewContact
);
contactRouter.put(
  '/:id',
  [
    validator(contactSchema.UpdateContactSchema),
    authentication
  ],

  contactController.updateContacts
);
contactRouter.delete(
  '/:id',
  [
    validator(contactSchema.DeleteContactSchema)
  ],
  contactController.deleteContacts
);
export default contactRouter;
