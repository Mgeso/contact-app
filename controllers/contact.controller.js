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
      message: req.body.message
    };
    const create = await contactServices.create(data);
    console.log(create);
    res.status(201).send({ status: true, message: 'contact saved successfully' });
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
}
export default new ContactController();
