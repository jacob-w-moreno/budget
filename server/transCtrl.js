let transactions = [
  {
    id: 0,
    type: '+',
    date: '1/1/2020',
    description: 'Found It',
    amount: 39.52,
    category_id: null
  },
  {
    id: 1,
    type: '-',
    date: '2/2/2020',
    description: 'Gas',
    amount: 43.95,
    category_id: 1
  },
  {
    id: 2,
    type: '+',
    date: '3/3/2020',
    description: 'Paycheck',
    amount: 39.52,
    category_id: null
  },
  {
    id: 3,
    type: '-',
    date: '4/4/2020',
    description: 'Board Game',
    amount: 60.39,
    category_id: 3
  },
]

let id = 4;

module.exports = {
  getTransactions: (req, res) => {
    res.status(200).send(transactions);
  },
  addTransaction: (req, res) => {
    const {type, amount, description, category_id, date} = req.body;
    const newTransaction = {
      id: id++,
      type,
      amount,
      description,
      category_id,
      date
    }
    transactions.push(newTransaction);
    res.status(200).send(transactions);
  }
}
