let categories = [
  {
    name: 'Give Away',
    type: '!%',
    allocated: 10,
    balance: 602.27,
    id: 0
  },
  {
    name: 'Investing',
    type: '!%',
    allocated: 10,
    balance: 602.27,
    id: 1
  },
  {
    name: 'Overflow',
    type: 'O',
    allocated: 10,
    balance: 443.57,
    id: 2
  },
  {
    name: 'Loan',
    type: '$',
    allocated: 337.43,
    balance: 337.43,
    id: 3
  },
  {
    name: 'Gas',
    type: '$',
    allocated: 45.00,
    balance: 45.00,
    id: 4
  },
  {
    name: 'Creative / Recreational',
    type: '%',
    allocated: 0,
    balance: 0.00,
    id: 5
  },
  {
    name: 'Emotional / Mental',
    type: '%',
    allocated: 2.7,
    balance: 119.76,
    id: 6
  },
  {
    name: 'Environmental / Possessive',
    type: '%',
    allocated: 0,
    balance: 0.00,
    id: 7
  },
  {
    name: 'Financial / Occupational',
    type: '%',
    allocated: 0,
    balance: 0.00,
    id: 8
  },
  {
    name: 'Intellectual / Physical',
    type: '%',
    allocated: 87.3,
    balance: 3872.37,
    id: 9
  },
  {
    name: 'Social / Spiritual',
    type: '%',
    allocated: 0,
    balance: 0.01,
    id: 10
  }
]

module.exports = {
  getCategories: (req, res) => {
    res.status(200).send(categories);
  },

  saveNewBalance: (req, res) => {
    const {tempCat} = req.body;
    categories = tempCat;
    res.status(200).send(categories);
  },

  saveOldBalance: (req, res) => {
    let {tempCat, categories} = req.body;
    tempCat.forEach((category, index) => {
      category.balance = categories[index].balance;
    })
    categories = tempCat;
    res.status(200).send(categories);
  },

  addTransaction: (req, res) => {
    const {amount, category_id} = req.body;
    let index = categories.findIndex(category => category.id === category_id);
    categories[index].balance = +(categories[index].balance - amount);
    res.status(200).send(categories);
  }
}
