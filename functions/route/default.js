module.exports = (req, res) => {
  console.log('default route');
  res.status(200).send('default');
};
