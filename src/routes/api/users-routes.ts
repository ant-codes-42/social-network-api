import { Router } from 'express';
import { getAllUsers, getUserById, createUser, updateUser, deleteUser, addFriend, deleteFriend } from '../../controllers/userController.js';

const router = Router();

// /api/users
router.route('/')
    .get(getAllUsers) // Get all users data and return as JSON
    .post(createUser); // Create a new user

// /api/users/:id
router.route('/:id')
    .get(getUserById) // Get a single user by ID and return as JSON
    .put(updateUser) // Update a user by ID
    .delete(deleteUser); // Delete a user by ID

// POST - /api/users

router.route('/:userId/friends/:friendId')
    .post(addFriend) // Add a new friend to a user's friend list
    .delete(deleteFriend); // Remove a friend from a user's friend list

export default router;