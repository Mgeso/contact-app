export default (err, req, res) => {
  console.error('', err);
  return res.send({ error: err.message });
};
