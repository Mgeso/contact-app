/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
import express from 'express';
import userController from '../controllers/user.controller.js';
import validator from '../middlewares/validator.middleware.js';
import userSchema from '../schema/user.schema.js';

const userRouter = express.Router();

userRouter.post('/', [validator(userSchema.CreateUserSchema)], userController.createUser);
userRouter.post('/login', [validator(userSchema.LoginUserSchema)], userController.loginUser);
userRouter.get('/', userController.fetchUsers);

export default userRouter;
