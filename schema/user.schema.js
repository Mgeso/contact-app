import Joi from 'joi';

const CreateUserSchema = Joi.object({
  email: Joi.string().email().min(5).required(),
  password: Joi.string().required().min(6).max(30)
});

const LoginUserSchema = CreateUserSchema.append({});

export default {
  CreateUserSchema,
  LoginUserSchema
};
