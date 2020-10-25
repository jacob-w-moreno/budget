let total = {total: 1812.53};

module.exports = {
  getTotal: (req, res) => {
    res.status(200).send(total);
  }
}
