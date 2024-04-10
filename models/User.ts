import mongoose, { Schema, Document } from 'mongoose';

// Define the interface for the User document
export interface IUser extends Document {
  username: string;
  password: string;
}

// Define the schema for the User model
const userSchema: Schema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true }
});

// Define and export the User model
const User = mongoose.model<IUser>('User', userSchema);

export default User;
