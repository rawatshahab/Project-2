import express from 'express';
import {
  createReview,
  getAllReviews,
  getReview,
  updateReview,
  deleteReview,
  getAverageRatings
} from '../controllers/reviewController';
import { apiKeyAuth } from '../middleware/apiKeyAuth';

const router = express.Router();

router.post('/reviews', apiKeyAuth, createReview);
router.get('/reviews', getAllReviews);
router.get('/reviews/:id', getReview);
router.put('/reviews/:id', apiKeyAuth, updateReview);
router.delete('/reviews/:id', apiKeyAuth, deleteReview);

// Aggregation route
router.get('/ratings/average', getAverageRatings);

export default router;
