import express from 'express';

import userController from '../controllers/userController';

const { register } = userController;

const router = express.Router();

// Welcome page
router.get('/', (req, res) => {
  res.json({
    message: 'Hi, welcome!',
  });
});

// Register user
router.post('/register', register);

export default router;
