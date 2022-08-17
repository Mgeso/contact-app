/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import contactServices from '../services/contact.services.js';

class ContactController {
  async createNewContact(req, res) {
    const data = {
      surname: req.body.surname,
      firstname: req.body.firstname,
      othername: req.body.othername,
      phone_number: req.body.phone_number,
      message: req.body.message,
    };
    const create = await contactServices.create(data);
    console.log(create);
    res.status(201).send({ status: true, message: 'contact saved successfully' });
  }
}
export default new ContactController();
