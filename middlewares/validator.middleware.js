/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
const validator = (schema, source = 'body') => async (req, res, next) => {
  try {
    const validated = await schema.validateAsync(req[source]);
    if (source === 'body') {
      req._body = req.body;
      req.body = validated;
    } else {
      req.query = validated;
    }
    next();
  } catch (e) {
    return res.status(400).send({ success: false, message: e.details[0].message });
    // throw new Error()
  }
};

export default validator;
