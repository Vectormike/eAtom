import express from 'express';

import bodyParser from 'body-parser';

import db from './server/database/dbConfig';
import route from './server/routes/index';

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

// Test connection
db.authenticate()
  .then(() => {
    console.log('Connection is OK');
  })
  .catch(err => {
    console.log('Unable to connect');
  });

// Test
app.get('/api/details', (req, res) => {
  const details = [{ id: 1, name: 'Victor' }];
  res.json(details);
});

// Home router
app.use('api', route)
app.listen(port, () => console.log(`Server running on port ${port}`));
