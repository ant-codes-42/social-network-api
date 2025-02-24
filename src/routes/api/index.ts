import { Router } from 'express';

import userRoutes from './users-routes.js';
import thoughtsRoutes from './thoughts-routes.js';

const router = Router();

router.use('/users', userRoutes);
router.use('/thoughts', thoughtsRoutes);

export default router;