import express from 'express';

const router = express.Router();

// Welcome page
router.get('/', (req, res) => {
  res.json({
    message: 'Hi, welcome!',
  });
});

// Register user
router.post('/register', (req, res) => {
  res.json({
    message: 'Registration successful!'
  })
});

export default router;
