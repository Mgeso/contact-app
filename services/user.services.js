/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import User from '../models/user.model.js';

class UserService {
  async createUser(data) {
    const newUser = await User.create(data);
    return newUser;
  }

  async loginUser({ email }) {
    const user = await User.findOne({ email });
    return user;
  }

  async fetchUsers() {
    const users = await User.find({});
    return users;
  }

  async findByEmail(email) {
    const user = await User.findOne({ email });

    return user;
  }
}
export default new UserService();
