import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import { database } from './server/database/dbConfig';
import home from './server/routes/index';

const app = express();
const port = process.env.PORT || 5000;

// Test database

//Enforce cors
app.use(cors());
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
app.use('/', home);

app.listen(port, () => console.log(`Server running on port ${port}`));
