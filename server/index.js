require('dotenv').config();
const express = require('express'),
      {SERVER_PORT} = process.env,
      catCtrl = require('./catCtrl'),
      totCtrl = require('./totalCtrl');
app = express();
app.use(express.json());

// === === AXIOS START === ===

app.get('/api/categories', catCtrl.getCategories);
app.get('/api/total', totCtrl.getTotal);

// === === AXIOS END === ===

const port = SERVER_PORT;
app.listen(port, () => console.log(`port: ${port}`))
