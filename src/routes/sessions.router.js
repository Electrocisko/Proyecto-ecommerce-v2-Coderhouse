import { Router } from 'express';
import { registerController } from '../controllers/sessions.controller.js'

const router = new Router();

router.post('/register', registerController );

export default router;