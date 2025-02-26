import { Thought } from '../models/index.js';
import { Request, Response } from 'express';

export const getAllThoughts = async (_req: Request, res: Response) => {
    try {
        const thoughts = await Thought.find();
        res.json(thoughts);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
};

export const getThoughtById = async (req: Request, res: Response) => {
    try {
        const thought = await Thought.findOne({ _id: req.params.id });
        if (!thought) {
            res.status(404).json({ message: 'No thought found with this id!' });
            return;
        }
        res.json(thought);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
};

export const createThought = async (req: Request, res: Response) => {
    try {
        const thought = await Thought.create(req.body);
        res.json(thought);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
};

export const updateThought = async (req: Request, res: Response) => {
    try {
        const thought = await Thought.findOneAndUpdate(
            { _id: req.params.id },
            { $set: req.body },
            { runValidators: true, new: true }
        );
        if (!thought) {
            res.status(404).json({ message: 'No thought found with this id!' });
            return;
        }
        res.json(thought);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
};

export const deleteThought = async (req: Request, res: Response) => {
    try {
        const thought = await Thought.findOneAndDelete({ _id: req.params.id });
        if (!thought) {
            res.status(404).json({ message: 'No thought found with this id!' });
            return;
        }
        res.json(thought);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
};

export const addReaction = async (req: Request, res: Response) => {
    try {
        const thought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $push: { reactions: req.body } },
            { runValidators: true, new: true }
        );
        if (!thought) {
            res.status(404).json({ message: 'No thought found with this id!' });
            return;
        }
        res.json(thought);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
};

export const deleteReaction = async (req: Request, res: Response) => {
    try {
        const thought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { reactionId: req.params.reactionId } } },
            { runValidators: true, new: true }
        );
        if (!thought) {
            res.status(404).json({ message: 'No thought found with this id!' });
            return;
        }
        
        res.json(thought);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
};