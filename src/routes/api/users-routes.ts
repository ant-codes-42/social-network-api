import { Router } from 'express';

const router = Router();

// GET - /api/users
// Get all users data and return as JSON
router.get('/', (_req, res) => {
    res.send('All users output here');
});

// GET - /api/users/:id
// Get a single user by ID and return as JSON
router.get('/:id', (req, res) => {
    res.send(`User with ID ${req.params.id} output here`);
});

// POST - /api/users
// Create a new user
router.post('/', (_req, res) => {
    res.send('New user created');
});

// PUT - /api/users/:id
// Update a user by ID
router.put('/:id', (req, res) => {
    res.send(`User with ID ${req.params.id} updated`);
});

// DELETE - /api/users/:id
// Delete a user by ID
router.delete('/:id', (req, res) => {
    res.send(`User with ID ${req.params.id} deleted`);
});

// POST - /api/users/:userId/friends/:friendId
// Add a new friend to a user's friend list
router.post('/:userId/friends/:friendId', (req, res) => {
    res.send(`Friend with ID ${req.params.friendId} added to user with ID ${req.params.userId}`);
});

// DELETE - /api/users/:userId/friends/:friendId
// Remove a friend from a user's friend list
router.delete('/:userId/friends/:friendId', (req, res) => {
    res.send(`Friend with ID ${req.params.friendId} removed from user with ID ${req.params.userId}`);
});


export default router;