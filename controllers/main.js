const welcome = (req, res) => {
  res.send({ message: 'It works' });
};

module.exports = { welcome };
