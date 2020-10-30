let categories = [
  {
    name: 'Savings',
    type: '!%',
    allocated: 10,
    balance: 100,
    id: 0
  },
  {
    name: 'Loan',
    type: '$',
    allocated: 337.43,
    balance: 337.43,
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
    name: 'Creative / Recreational',
    type: '%',
    allocated: 90,
    balance: 100,
    id: 3
  },
  {
    name: 'Emotional / Mental',
    type: '%',
    allocated: 90,
    balance: 100,
    id: 4
  },
  {
    name: 'Environmental',
    type: '%',
    allocated: 90,
    balance: 100,
    id: 5
  },
  {
    name: 'Financial / Occupational',
    type: '%',
    allocated: 90,
    balance: 100,
    id: 6
  },
  {
    name: 'Intellectual / Physical',
    type: '%',
    allocated: 90,
    balance: 100,
    id: 7
  },
  {
    name: 'Social / Spiritual',
    type: '%',
    allocated: 90,
    balance: 100,
    id: 8
  }
]

module.exports = {
  getCategories: (req, res) => {
    res.status(200).send(categories);
  }
}
