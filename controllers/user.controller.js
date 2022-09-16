/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
import _ from 'lodash';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import userServices from '../services/user.services.js';

class UserController {
  async createUser(req, res) {
    const { email, password } = req.body;

    const user = await userServices.findByEmail(email);

    if (!_.isEmpty(user)) {
      return res.status(409).send({
        success: false,
        message: 'email already exist'
      });
    }

    const saltRound = 8;
    const hashPassword = await bcrypt.hash(password, saltRound);

    const data = { email: req.body.email, password: hashPassword };
    const newUser = await userServices.createUser(data);
    return res.status(201).send({ success: true, message: 'user created successfully', data: newUser });
  }

  async loginUser(req, res) {
    const user = await userServices.findByEmail(req.body.email);
    if (_.isEmpty(user)) {
      return res.status(404).send({ success: false, body: 'user does not exist' });
    }
    const verifyPassword = bcrypt.compareSync(req.body.password, user.password);
    if (!verifyPassword) {
      return res.status(404).send({ success: false, message: 'email or password is invalid' });
    }
    const token = jwt.sign({ _id: user._id, email: user.email }, process.env.TOKEN_SECRET, { expiresIn: '24hrs', algorithm: 'HS512' });
    return res.status(200).send({
      success: true,
      body: {
        message: 'user logged in successfully',
        data: { email: user.email, token }
      }
    });
  }

  async fetchUsers(req, res) {
    const users = await userServices.fetchUsers();
    console.log(users);
    return res.status(200).send({ status: true, body: users });
  }
}

export default new UserController();
