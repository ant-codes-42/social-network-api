import { Router } from 'express';
import { getAllThoughts, getThoughtById, createThought, updateThought, deleteThought, addReaction, deleteReaction } from '../../controllers/thoughtController.js';

const router = Router();

// /api/thoughts
router.route('/')
    .get(getAllThoughts) // Get all thoughts data and return as JSON
    .post(createThought); // Create a new thought

// /api/thoughts/:id
router.route('/:id')
    .get(getThoughtById) // Get a single thought by ID and return as JSON
    .put(updateThought) // Update a thought by ID
    .delete(deleteThought); // Delete a thought by ID

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
    .post(addReaction); // Add a new reaction to a thought

router.route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction); // Remove a reaction from a thought

export default router;