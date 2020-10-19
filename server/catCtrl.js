let categories = [
  {
    name: 'test',
    type: '$',
    allocated: 400,
    balance: 300,
    id: 0
  },
  {
    name: 'test 2',
    type: '%',
    allocated: 100,
    balance: 250,
    id: 1
  },
  {
    name: 'test 3',
    type: '$',
    allocated: 200,
    balance: 200,
    id: 2
  }
]

module.exports = {
  getCategories: (req, res) => {
    res.status(200).send(categories);
  }
}
