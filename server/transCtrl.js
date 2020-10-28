let transactions = []

let id = -1;

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
