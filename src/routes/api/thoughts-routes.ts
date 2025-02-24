import { Router } from 'express';

const router = Router();

// GET - /api/thoughts
// Get all thoughts data and return as JSON
router.get('/', (_req, res) => {
    res.send('All thoughts output here');
});

// GET - /api/thoughts/:id
// Get a single thought by ID and return as JSON
router.get('/:id', (req, res) => {
    res.send(`Thought with ID ${req.params.id} output here`);
});

// POST - /api/thoughts
// Create a new thought
router.post('/', (_req, res) => {
    res.send('New thought created');
});

// PUT - /api/thoughts/:id
// Update a thought by ID
router.put('/:id', (req, res) => {
    res.send(`Thought with ID ${req.params.id} updated`);
});

// DELETE - /api/thoughts/:id
// Delete a thought by ID
router.delete('/:id', (req, res) => {
    res.send(`Thought with ID ${req.params.id} deleted`);
});

// POST - /api/thoughts/:thoughtId/reactions
// Add a new reaction to a thought
router.post('/:thoughtId/reactions', (req, res) => {
    res.send(`New reaction added to thought with ID ${req.params.thoughtId}`);
});

// DELETE - /api/thoughts/:thoughtId/reactions/:reactionId
// Remove a reaction from a thought
router.delete('/:thoughtId/reactions/:reactionId', (req, res) => {
    res.send(`Reaction with ID ${req.params.reactionId} removed from thought with ID ${req.params.thoughtId}`);
});

export default router;