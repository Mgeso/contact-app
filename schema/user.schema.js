import Joi from 'joi';

const CreateUserSchema = Joi.object({
  email: Joi.string().email().min(3).required(),
  password: Joi.string().required().min(6).max(30)
});

export default {
  CreateUserSchema
};
