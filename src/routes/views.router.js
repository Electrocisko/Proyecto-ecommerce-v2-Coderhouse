import { Router } from 'express';
import logger from '../config/winston.config.js';

const router = new Router();

router.get('/',async (req,res) => {
    logger.log('info',`request type ${req.method} en route ${req.path} ${new Date()}`)
    res.render('pages/index.ejs')
});

router.get('/register', async (req,res) => {
    res.render('pages/register.ejs')
});

router.get('/login', (req,res) => {
    res.render('pages/login.ejs')
})

export default router;