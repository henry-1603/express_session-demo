"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const path_1 = __importDefault(require("path"));
exports.router = express_1.default.Router();
exports.router.get('/', (req, res) => {
    res.sendFile(path_1.default.dirname(__dirname) + '/views/index.html');
});
exports.router.get('/login', (req, res) => {
    res.sendFile(path_1.default.dirname(__dirname) + '/views/loginForm.html');
});
exports.router.post('/login', userController_1.postLogin);
exports.router.get('/logout', userController_1.logout);
exports.router.get('/view-cookie', (req, res) => {
    const userData = req.cookies.user;
    res.json(userData);
});
exports.router.get('/view-session', (req, res) => {
    const userData = req.session.user;
    res.json(userData);
});
