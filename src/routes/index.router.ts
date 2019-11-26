import { Router } from 'express';
import { healtcheck } from '../controller/index.controller';

const router = Router();

router.get('/status', healtcheck);

export default router;
