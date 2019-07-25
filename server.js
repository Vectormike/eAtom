import express from 'express';
import logger from 'morgan';
import { database } from './server/database/dbConfig';
import router from './server/routes/index';

const app = express();
const port = process.env.PORT || 6000;

// Test database
database
  .select('*')
  .from('user')
  .then(data => console.log(data));

// Enforce Body parser
app.use(express.json());

// Enforce logger
app.use(logger('dev'));

// Test database connection

// Test
app.get('/test', (req, res) => {
  const details = [{ id: 1, name: 'Victor' }];
  res.json(details);
});

// Home router
app.use('/', router);

app.listen(port, () => console.log(`Server running on port ${port}`));
