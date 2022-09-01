import mongoose from 'mongoose';

const contactSchema = mongoose.Schema({
  surname: { type: String, required: true, unique: true },
  firstname: { type: String, required: true, unique: true },
  othername: { type: String, required: true },
  phone_number: { type: Array, required: true },
  user: {
    Ref: 'User',
    type: mongoose.Schema.Types.ObjectId

  }
});

const contactModel = mongoose.model('contact', contactSchema);

export default contactModel;
