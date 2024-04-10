import { Request, Response } from 'express';

export const getLogin = (req: Request, res: Response) => {
  res.send('Login form');
};

export const postLogin = (req: Request, res: Response) => {
  console.log(req.body.username);
  const { username, password } = req.body;

  // Dummy authentication
  if (username === 'admin' && password === 'password') {
    // Set cookie upon successful login
    res.cookie('user', username, { maxAge: 900000, httpOnly: true });
    req.session.user = username;
    res.redirect('/');
  } else {
    res.status(401).send('Invalid username or password');
  }
};

export const logout = (req: Request, res: Response) => {
  req.session.destroy(() => {
    res.redirect('/login');
  });
};
