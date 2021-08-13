import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Types.ObjectId, ref: 'User' },
    title: {
      type: String,
      require: true,
      trim: true,
      minLength: [5, 'Title must not be less than 10 chars.'],
      maxLength: [50, 'Title must not exeed 50 chars.'],
    },
    content: {
      type: String,
      require: true,
      minLength: 2000,
    },
    description: {
      type: String,
      require: true,
      trim: true,
      maxLength: [200, 'Description must not exeed 200 chars.'],
    },
    thumbnail: {
      type: String,
      require: true,
    },
    category: { type: mongoose.Types.ObjectId, ref: 'Category' },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Post', postSchema);
