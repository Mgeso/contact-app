/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-empty */
/* eslint-disable no-lone-blocks */
/* eslint-disable consistent-return */
import Jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const authentication = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return res.status(400).send({
      success: false,
      message: 'no token'
    });
  }

  const decoded = Jwt.verify(token, process.env.TOKEN_SECRET);

  if (!decoded) {
    return res.status(403).send({ status: false, message: 'forbidden' });
  }

  // find
  const user = User.findById(decoded._id);

  // check user found, return
  if (!user) {
    return res.status(403).send({ status: false, message: 'invalid ' });
  }

  // console.log(user, decoded)
  req.user = user;
  next();
};

export default authentication;
