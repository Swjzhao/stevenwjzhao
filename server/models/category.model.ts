import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add your category'],
      trim: true,
      unique: true,
      maxLength: [50, 'Category must not exeed 50 chars.'],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Category', categorySchema);
