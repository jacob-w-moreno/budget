let categories = [
  {
    name: 'Savings',
    type: '!%',
    allocated: 10,
    balance: 100,
    id: 0
  },
  {
    name: 'Gas',
    type: '$',
    allocated: 45,
    balance: 45,
    id: 1
  },
  {
    name: 'Overflow',
    type: 'O',
    allocated: 10,
    balance: 100,
    id: 2
  },
  {
    name: 'Entertainment',
    type: '%',
    allocated: 90,
    balance: 100,
    id: 3
  }
]

module.exports = {
  getCategories: (req, res) => {
    res.status(200).send(categories);
  }
}
