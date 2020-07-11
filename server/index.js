require('dotenv').config();
const express = require('express'),
      {SERVER_PORT} = process.env;

app = express();

app.use(express.json());

app.get('/cat', (req, res) => res.status(200).send('i do you?'));

const port = SERVER_PORT;
app.listen(port, () => console.log(`port: ${port}`))
