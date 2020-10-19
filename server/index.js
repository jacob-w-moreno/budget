require('dotenv').config();
const express = require('express'),
      {SERVER_PORT} = process.env;
      catCtrl = require ('./catCtrl');

app = express();

app.use(express.json());

app.get('/api/ping', (req, res) => res.status(200).send('pong'));
app.get('/api/categories', catCtrl.getCategories);

const port = SERVER_PORT;
app.listen(port, () => console.log(`port: ${port}`))
