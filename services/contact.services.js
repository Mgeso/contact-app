/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
import contactModel from '../models/contactSupport.js';

class ContactService {
  async create(data) {
    const newContact = await contactModel.create(data);
    return newContact;
  }
}

export default new ContactService();
