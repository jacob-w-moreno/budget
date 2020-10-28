require('dotenv').config();
const express = require('express'),
      {SERVER_PORT} = process.env,
      catCtrl = require('./catCtrl'),
      totCtrl = require('./totalCtrl'),
      transCtrl = require('./transCtrl');
app = express();
app.use(express.json());

// === === AXIOS START === ===

app.get('/api/categories', catCtrl.getCategories);

app.get('/api/transactions', transCtrl.getTransactions);
app.post('/api/transactions', transCtrl.addTransaction);

app.get('/api/total', totCtrl.getTotal);
app.put('/api/total', totCtrl.putTotal);

// === === AXIOS END === ===

const port = SERVER_PORT;
app.listen(port, () => console.log(`port: ${port}`))
