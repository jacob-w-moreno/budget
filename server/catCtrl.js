let categories = [
  {
    name: 'Give Away',
    type: '!%',
    allocated: 10,
    balance: 181.25,
    id: 0
  },
  {
    name: 'Overflow',
    type: 'O',
    allocated: 10,
    balance: 129.38,
    id: 1
  },
  {
    name: 'Loan',
    type: '$',
    allocated: 337.43,
    balance: 337.43,
    id: 2
  },
  {
    name: 'Gas',
    type: '$',
    allocated: 40.00,
    balance: 40.00,
    id: 3
  },
  {
    name: 'Creative / Recreational',
    type: '%',
    allocated: 10,
    balance: 129.38,
    id: 4
  },
  {
    name: 'Emotional / Mental',
    type: '%',
    allocated: 20,
    balance: 258.77,
    id: 5
  },
  {
    name: 'Environmental',
    type: '%',
    allocated: 30,
    balance: 388.15,
    id: 6
  },
  {
    name: 'Financial / Occupational',
    type: '%',
    allocated: 10,
    balance: 129.38,
    id: 7
  },
  {
    name: 'Intellectual / Physical',
    type: '%',
    allocated: 10,
    balance: 129.38,
    id: 8
  },
  {
    name: 'Social / Spiritual',
    type: '%',
    allocated: 10,
    balance: 129.35,
    id: 9
  }
]

module.exports = {
  getCategories: (req, res) => {
    res.status(200).send(categories);
  },
  putCategories: (req, res) => {
    const {tempCat} = req.body;
    categories = tempCat;
    res.status(200).send(categories);
  }
}
