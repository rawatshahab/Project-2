import { Request, Response } from 'express';
import Review from '../models/reviewModel';

export const createReview = async (req: Request, res: Response) => {
  try {
    const review = await Review.create(req.body);
    res.status(201).json(review);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const getAllReviews = async (req: Request, res: Response) => {
  const reviews = await Review.find();
  res.json(reviews);
};

export const getReview = async (req: Request, res: Response) => {
  const review = await Review.findById(req.params.id);
  if (!review) return res.status(404).json({ message: 'Review not found' });
  res.json(review);
};

export const updateReview = async (req: Request, res: Response) => {
  const review = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!review) return res.status(404).json({ message: 'Review not found' });
  res.json(review);
};

export const deleteReview = async (req: Request, res: Response) => {
  const review = await Review.findByIdAndDelete(req.params.id);
  if (!review) return res.status(404).json({ message: 'Review not found' });
  res.json({ message: 'Review deleted' });
};


export const getAverageRatings = async (req: Request, res: Response) => {
  try {
    const avgRatings = await Review.aggregate([
      {
        $group: {
          _id: '$bookTitle',
          averageRating: { $avg: '$rating' },
          reviewCount: { $sum: 1 }
        }
      }
    ]);
    res.json(avgRatings);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
