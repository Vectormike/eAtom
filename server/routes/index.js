import express from 'express';

const router = express.Router();

// Welcome page
router.get('/', (req, res) => {
  res.send('Hi');
  res.json({
    message: 'Hi, welcome!',
  });
});
export default router;
