import dotenv from 'dotenv'


dotenv.config();

export default {
    app: {
        PORT:process.env.PORT,
        NODE_ENV: process.env.NODE_ENV || 'production',
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