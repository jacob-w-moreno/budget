require('dotenv').config();
  const {SERVER_PORT} = process.env;

const express = require('express'),
      app = express(),
      PORT = SERVER_PORT,
      catCtrl = require('./catCtrl');

app.get('/api/categories', catCtrl.readCategories);

app.listen(PORT, () => console.log(`server listening on ${PORT}`));
