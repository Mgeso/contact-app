/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import contactServices from '../services/contact.services.js';

class ContactController {
  async createNewContact(req, res) {
    const data = {
      surname: req.body.surname,
      firstname: req.body.firstname,
      othername: req.body.othername,
      phone_number: [req.body.phone_number],
      user: req.body.userId // remember to update thus guý after authentication
    };
    const contact = await contactServices.create(data);

    res.status(201).send({ status: true, message: 'contact saved successfully', data: contact });
  }

  async fetchContacts(req, res) {
    const fetch = await contactServices.fetchcontacts();
    {
      console.log(fetch);
      return res.status(200).send({ status: true, body: { ...contacts } });
    }
  }

  async updateContacts(req, res) {
    const update = await contactServices.updateContacts(req.params.id, req.body);
    res.status(201).send({
      success: true,
      body: 'contact updated successfully'
    });
  }

  async deleteContacts(req, res) {
    const deleted = await contactServices.deleteContacts(req.params.id);
    // contact.info(deleted);
    return res.status(200).send({ message: true, body: 'contact deleted successfully' });
  }

  async getAllContacts(req, res) {
    const allContact = await contactService.getContacts(req.params.userId);
    if (_.isEmpty(getAllContact)) {
      return res.status(200).send({ message: true, count: allContact.length, body: 'no contact found' });
    }
  }
}
export default new ContactController();
