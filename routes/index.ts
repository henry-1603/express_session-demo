import express, { Router } from 'express';
const router: Router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to my app');
});

export default router;
