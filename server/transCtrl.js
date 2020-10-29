let transactions = [
  {
    id: 0,
    type: '+',
    amount: 1812.53,
    description: 'all my money',
    category_id: null,
    date: '26 / 10'
  },
  {
    id: 1,
    type: '-',
    amount: 12.53,
    description: 'even it out',
    category_id: 2,
    date: '27 / 10'
  }
]

let id = 2;

module.exports = {
  getTransactions: (req, res) => {
    res.status(200).send(transactions);
  },
  addTransaction: (req, res) => {
    let {type, amount, description, category_id, date} = req.body;
    if (type==="+") category_id = null;
    const newTransaction = {
      id: id++,
      type,
      amount: +amount,
      description,
      category_id,
      date
    }
    console.log(type, amount, description, category_id, date)
    transactions.push(newTransaction);
    res.status(200).send(transactions);
  }
}
