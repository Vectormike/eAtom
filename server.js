/* eslint-disable no-console */
import express from 'express';

import bodyParser from 'body-parser';

import db from './server/database/dbConfig';

// Routes
import router from './server/routes/index';

const app = express();
const port = process.env.PORT || 6000;

// Enforce Body parser
app.use(
  express.json(),
);

// Test database connection
db.authenticate()
  .then(() => {
    console.log('Connection is OK');
  })
  .catch(err => {
    console.log(`Unable to connect ${err}`);
  });

// Test
app.get('/test', (req, res) => {
  const details = [{ id: 1, name: 'Victor' }];
  res.json(details);
});

// Home router
app.use('/', router);

app.listen(port, () => console.log(`Server running on port ${port}`));
