import express from 'express';
import { getLogin, postLogin, logout } from '../controllers/userController';
import path from 'path';

export const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.dirname(__dirname) + '/views/index.html');
});

router.get('/login', (req, res) => {
  res.sendFile(path.dirname(__dirname) + '/views/loginForm.html');
});


router.post('/login', postLogin);
router.get('/logout', logout);

router.get('/view-cookie', (req, res) => {
  const userData = req.cookies.user;
  res.json(userData);
});

router.get('/view-session', (req, res) => {
  const userData = req.session.user;
  res.json(userData);
});
