import Joi from 'joi';

const CreateContactSchema = Joi.object({
  surname: Joi.string().min(2).required(),
  firstname: Joi.string().min(2).required(),
  othername: Joi.string().min(2).required(),
  phone_number: Joi.string().min(11).max(15)
});

const UpdateContactSchema = Joi.object({
  surname: Joi.string(),
  firstname: Joi.string(),
  othername: Joi.string(),
  phone_number: Joi.string().min(11)
});
const DeleteContactSchema = Joi.object({

  id: Joi.string().required()
});

export default {
  CreateContactSchema,
  UpdateContactSchema,
  DeleteContactSchema
};
