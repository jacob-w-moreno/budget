require('dotenv').config();

const express = require('express'),
      {SERVER_PORT} = process.env,
      app = express();

app.use(express.json());

app.get('/api/people', (req, res) => {
  console.log('running');
  req.body={body: true};
  const result = req.body
  res.status(200).send(result);
})

app.listen(SERVER_PORT, () => console.log(`running: ${SERVER_PORT}`));
