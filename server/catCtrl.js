let categories = [
  {
    name: 'Savings',
    type: '!%',
    allocated: 10,
    balance: 181.25,
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
    balance: 129.38,
    id: 2
  },
  {
    name: 'Creative / Recreational',
    type: '%',
    allocated: 10,
    balance: 129.38,
    id: 3
  },
  {
    name: 'Emotional / Mental',
    type: '%',
    allocated: 20,
    balance: 258.77,
    id: 4
  },
  {
    name: 'Environmental',
    type: '%',
    allocated: 30,
    balance: 388.15,
    id: 5
  },
  {
    name: 'Financial / Occupational',
    type: '%',
    allocated: 10,
    balance: 129.38,
    id: 6
  },
  {
    name: 'Intellectual / Physical',
    type: '%',
    allocated: 10,
    balance: 129.38,
    id: 7
  },
  {
    name: 'Social / Spiritual',
    type: '%',
    allocated: 10,
    balance: 129.35,
    id: 8
  }
]

module.exports = {
  getCategories: (req, res) => {
    res.status(200).send(categories);
  },
  putCategories: (req, res) => {
    const {tempCat} = req.body;
    console.log(tempCat);
    categories = tempCat;
    res.status(200).send(categories);
  }
}
