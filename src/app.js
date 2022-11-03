import express from 'express';
import logger from './config/winston.config.js';
import __dirname from './utils.js';
import viewsRouter from './routes/views.router.js';
import dotenvConfig from './config/dotenv.config.js';

//initializations
const app = express();
const PORT = dotenvConfig.app.PORT || 8080;
const HOST = dotenvConfig.app.HOST || '127.0.0.1'

// Template config engine
app.set('views',__dirname+'/views');
app.set('view engine', 'ejs');


// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", express.static(__dirname + "/public"));

// routes
app.use('/',viewsRouter);

//starting de server
const server = app.listen(PORT, () => {
    console.log(`Server listen in ${PORT}`)
    logger.log('info',`Server listen in http://${HOST}:${PORT}`)
})
