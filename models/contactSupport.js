import mongoose from 'mongoose';

const contactSchema = mongoose.Schema({
  surname: { type: String, required: true },
  firstname: { type: String, required: true },
  othername: { type: String, required: true },
  phone_number: { type: String, required: true },
  message: { type: String },
});

const contactModel = mongoose.model('contact', contactSchema);

export default contactModel;
