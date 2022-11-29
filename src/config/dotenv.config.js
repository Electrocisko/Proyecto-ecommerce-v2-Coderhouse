import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()


export default {
    app: {
        PORT:process.env.PORT || '3000',
        NODE_ENV: process.env.NODE_ENV || 'development',
        HOST: process.env.HOST || '127.0.0.1',
        LOGS: process.env.LOGS || 'silly'
    },
    mongo:{
        MONGO_URL: process.env.MONGO_URL 
    },
    jwt: {
        SECRET: process.env.JWT_SECRET,
        COOKIE: process.env.JWT_COOKIE 
    },
    nodemail: {
        NM_EMAIL: process.env.NM_EMAIL,
        NM_CODE: process.env.NM_CODE,
        NM_ADDRESSEE: process.env.NM_ADDRESSEE
    }
}