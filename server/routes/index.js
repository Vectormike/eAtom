import { Router } from 'express';

import userController from '../controllers/userController';

const { register, login } = userController;

const router = Router();

// Welcome page
router.get('/', (req, res) => {
  res.send("Hi")
});

// Register user
router.post('/register', register);

// Login
router.post('/login', login);

export default router;
