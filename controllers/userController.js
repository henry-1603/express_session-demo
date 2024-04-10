"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.postLogin = exports.getLogin = void 0;
const getLogin = (req, res) => {
    res.send('Login form');
};
exports.getLogin = getLogin;
const postLogin = (req, res) => {
    console.log(req.body.username);
    const { username, password } = req.body;
    // Dummy authentication
    if (username === 'admin' && password === 'password') {
        // Set cookie upon successful login
        res.cookie('user', username, { maxAge: 900000, httpOnly: true });
        req.session.user = username;
        res.redirect('/');
    }
    else {
        res.status(401).send('Invalid username or password');
    }
};
exports.postLogin = postLogin;
const logout = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login');
    });
};
exports.logout = logout;
