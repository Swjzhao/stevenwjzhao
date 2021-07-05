/* eslint-disable */
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add your name'],
    trim: true,
    maxLength: [20, 'You name needs to be within 20 characters'],
  },
  email: {
    type: String,
    trim: true,
    required: [true, 'Please add your email'],
    unique: true,
    match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Please use a valid email.'],
  },
  signInMethod: {
    type: String,
    default: 'email',
  },

  password: {
    type: String,
    required: [true, 'Please add your password'],
    trim: true,
  },
  avatar: {
    type: String,
    default: '',
  },
  role: {
    type: Number,
    default: '0', // 2:admin, 1:manager, 0:normal
  },
}, {
  timestamps: true,
});

export default mongoose.model('User', userSchema);
