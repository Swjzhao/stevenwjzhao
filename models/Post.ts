import mongoose, { Schema, Document } from "mongoose";

export interface IPost extends Document {
  title: string;
  slug: string;
  content: string;
  description: string;
  thumbnail: string;
  category: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const PostSchema = new Schema<IPost>(
  {
    title: { type: String, required: true, maxlength: 200 },
    slug: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    description: { type: String, required: true, maxlength: 500 },
    thumbnail: { type: String, default: "" },
    category: {
      type: String,
      required: true,
      enum: ["tech", "life", "books"],
    },
    published: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export default mongoose.models.Post ||
  mongoose.model<IPost>("Post", PostSchema);
