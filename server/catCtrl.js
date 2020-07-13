let categories = [
  {
    name: 'test',
    type: '$',
    allocated: 400,
    balance: 300,
    id: 0
  }
]

module.exports = {
  getCategories: (req, res) => {
    console.log('running');
    res.status(200).send(categories);
  }
}
