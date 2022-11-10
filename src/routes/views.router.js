import { Router } from 'express';
import { viewLoginController, viewMenuController, viewRegisterController, viewIndexController } from '../controllers/views.controllers.js';

const router = new Router();

router.get('/', viewIndexController );

router.get('/register', viewRegisterController);

router.get('/login', viewLoginController);

router.get('/menu',viewMenuController );

export default router;