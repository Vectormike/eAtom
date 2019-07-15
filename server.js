import express from 'express';

import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

// Test
app.get('/api/details', (req, res) => {
  const details = [{ id: 1, name: 'Victor' }];
  res.json(details);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, 
  () => 
  console.log(`Server running on port ${PORT}`));
