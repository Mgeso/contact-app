/* eslint-disable no-unused-vars */
import mongoose from 'mongoose';

const database = () => {
  mongoose.connect(process.env.MONGO_URI).then((value) => console.log('database connected')).catch((e) => console.log(e));
};
export default database;
