import { Router } from 'express';
import {getUsersController , postUsersController } from '../controllers/users.controllers.js'

const router = new Router();

router.get('/',getUsersController);

router.post('/', postUsersController);



export default router;