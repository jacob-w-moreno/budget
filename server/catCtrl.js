let categories = [
  { id: 0, type: '%!', allocated: 10, balance: 20, name: 'SAVINGS' },
  { id: 1, type: '%!', allocated: 10, balance: 20, name: 'TITHING' },
  { id: 2, type: '$', allocated: 50, balance: 40, name: 'ENTERTAINMENT' },
  { id: 3, type: '$', allocated: 50, balance: 40, name: 'EATING OUT' },
  { id: 4, type: '%', allocated: 50, balance: 40, name: 'HOUSE' },
  { id: 5, type: 'o', allocated: 50, balance: 40, name: 'OVERFLOW' }
]

module.exports = {
  createCategory: (req, res) => {
    console.log('WIN: createCategory');
  },
  readCategories: (req, res) => {
    console.log('WIN: readCategories');
    res.status(200).send(categories);
  },
  updateCategory: (req, res) => {
    console.log('WIN: updateCategory');
  },
  deleteCategory: (req, res) => {
    console.log('WIN: deleteCategory');
  }
}
