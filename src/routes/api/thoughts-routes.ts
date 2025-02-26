import { Router } from 'express';
import { getAllThoughts, getThoughtById, createThought, updateThought, deleteThought, addReaction, deleteReaction } from '../../controllers/thoughtController';

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

// POST - /api/thoughts
// Create a new thought
router.route('/:thoughtId/reactions')
    .post(addReaction) // Add a new reaction to a thought
    .delete(deleteReaction); // Remove a reaction from a thought

export default router;