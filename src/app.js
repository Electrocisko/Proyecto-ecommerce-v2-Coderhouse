import express from 'express';
import logger from './config/winston.config.js';
import __dirname from './helpers/utils.js';
import viewsRouter from './routes/views.router.js';
import usersRouter from './routes/users.router.js';
import cartsRouter from './routes/carts.router.js';
import productsRouter from './routes/products.router.js';
import dotenvConfig from './config/dotenv.config.js';


//initializations
const app = express();
const PORT = dotenvConfig.app.PORT || 8080;
const HOST = dotenvConfig.app.HOST || '127.0.0.1'

logger.log('debug',`Dirname en app : ${__dirname}`)


// Template config engine
app.set('views',__dirname+'/views');
app.set('view engine', 'ejs');

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//static files
app.use("/", express.static(__dirname + "/public"));

// routes
app.use('/',viewsRouter);
app.use('/api/users', usersRouter);
app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

//starting de server
const server = app.listen(PORT, () => {
    logger.log('info',`Server listen in http://${HOST}:${PORT}`)
});
