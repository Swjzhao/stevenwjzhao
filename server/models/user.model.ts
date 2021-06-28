import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add your name'],
    trim: true,
    maxLength: [20, 'You name needs to be within 20 characters'],
  },
  accountId: {
    type: String,
    required: [true, 'Please add your email or phone'],
    trim: true,
    unique: true,
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
