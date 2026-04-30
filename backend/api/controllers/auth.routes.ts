import { Router } from 'express';
import { SendDetails } from './auth.controller';

const router = Router();

router.post('/api/v1/user/contact', SendDetails);

export default router;
