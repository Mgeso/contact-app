/* eslint-disable no-underscore-dangle */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
import options from 'joi';
import _ from 'lodash';
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
    const { query } = options;
    const { phone_number } = data;

    if (!phone_number.startsWith('+')) {
      const isANumber = Number.parseInt(phone_number, 10);
      if (Number.isNaN(isANumber)) {
        console.log('not a valid number');
      }
    } else {
      const subNumber = phone_number.slice(1);
      const _isANumber = Number.parseInt(subNumber, 10);

      console.log(subNumber, _isANumber);
      if (Number.isNaN(_isANumber)) {
        console.log('not a valid number..................');
      }
    }

    const update = {
      $addToSet: { phone_number: data.phone_number },
      ..._.omit(data, 'phone_number')

    };

    const newContact = await contactModel.findByIdAndUpdate(
      id,
      update
    );
    return newContact;
  }

  async deleteContacts(id) {
    const newContact = contactModel.findByIdAndDelete(id);
    return newContact;
  }
}
export default new ContactService();
