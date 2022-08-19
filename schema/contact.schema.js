import Joi from 'joi';

const CreateContactSchema = Joi.object({
  surname: Joi.string().min(2).required(),
  firstname: Joi.string().min(2).required(),
  othername: Joi.string().min(2).required(),
  phone_number: Joi.string().min(11).max(15),
  message: Joi.string().min(1)
});

export default {
  CreateContactSchema
};
