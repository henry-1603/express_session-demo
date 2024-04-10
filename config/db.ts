import mongoose from 'mongoose';

// MongoDB connection URI
const MONGODB_URI: string = 'mongodb+srv://username:password@your-cluster.mongodb.net/test';

// Options for MongoDB connection
const MONGODB_OPTIONS: mongoose.ConnectOptions = {};

// Connect to MongoDB
mongoose.connect(MONGODB_URI, MONGODB_OPTIONS)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

export default mongoose.connection;
