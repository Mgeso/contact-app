/* eslint-disable consistent-return */
import Jwt from 'jsonwebtoken';

const authentication = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return res.satus(400).send({
      success: false,
      message: 'no token'
    });
  }

  const decoded = Jwt.verify(token, process.env.TOKEN_SECRET);

  if (!decoded) {
    return res.status(403).send({ status: false, message: 'forbidden' });
  }

  // find
  const user = '';
  // check user found, return

  req.user = user;
  next();
};

export default authentication;
