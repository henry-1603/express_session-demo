"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// MongoDB connection URI
const MONGODB_URI = 'mongodb+srv://username:password@your-cluster.mongodb.net/test';
// Options for MongoDB connection
const MONGODB_OPTIONS = {};
// Connect to MongoDB
mongoose_1.default.connect(MONGODB_URI, MONGODB_OPTIONS)
    .then(() => {
    console.log('Connected to MongoDB');
})
    .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});
exports.default = mongoose_1.default.connection;
