/* eslint-disable no-unused-vars */
import pino from 'pino';

const logger = pino();

export default (err, req, res, next) => {
  logger.error(err);
  return res.status(500).send({ error: err.message });
};
