/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
import contactModel from '../models/contactSupport.js';

class ContactService {
  async create(data) {
    const newContact = await contactModel.create(data);
    return newContact;
  }

  async read(data) {
    const newContact = await contactModel.findOne({ email: data.email });
    return newContact;
  }

  async fetchContacts() {
    const newContact = contactModel.find({});
    return newContact;
  }

  async updateContacts(id, data) {
    const newContact = contactModel.findByIdAndUpdate({ _id: id }, data);
    return newContact;
  }

  async deleteContacts(id, data) {
    const newContact = contactModel.findByIdAndDelete({ _id: id }, data);
    return newContact;
  }
}
export default new ContactService();
