import mongoose, { Document, Schema } from 'mongoose';

export interface IReview extends Document {
  reviewer: string;
  bookTitle: string;
  reviewText: string;
  rating: number;
  createdAt: Date;
  updatedAt: Date;
}

const reviewSchema = new Schema<IReview>(
  {
    reviewer: { type: String, required: true },
    bookTitle: { type: String, required: true },
    reviewText: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 }
  },
  { timestamps: true }
);

export default mongoose.model<IReview>('Review', reviewSchema);
