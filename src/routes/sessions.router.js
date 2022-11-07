import { Router } from 'express';
import { registerController } from '../controllers/sessions.controller.js'
import upLoader from '../helpers/storageImg.js';

const router = new Router();

router.post('/register', upLoader.single('imageUrl'), registerController );

export default router;