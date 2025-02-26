import express, { Application } from 'express';
import mongoose, { ConnectOptions } from 'mongoose';
import routes from './routes/index.js';

// Connect to MongoDB
const app: Application = express();
const PORT: number | string = process.env.PORT || 3001;
const MONGO_URI: string = 'mongodb://127.0.0.1:27017/socialNetwork';

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
    family: 4,
    serverSelectionTimeoutMS: 5000,
} as ConnectOptions)
.then(() => console.log('MongoDB connected'))
.catch((err: Error) => console.error('MongoDB connection error:', err));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});