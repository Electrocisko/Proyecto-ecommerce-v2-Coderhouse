//import dotenv from 'dotenv'


//dotenv.config();

export default {
    app: {
        PORT:process.env.PORT,
        NODE_ENV: process.env.NODE_ENV || 'development',
        HOST: process.env.HOST || '127.0.0.1',
        LOGS: process.env.LOGS || 'silly'
    },
    mongo:{
        MONGO_URL: process.env.MONGO_URL || "mongodb+srv://zuchi:xkT3ZDTSXyDv4hB@cluster0.rvl2uyz.mongodb.net/proyectov2?retryWrites=true&w=majority"
    },
    jwt: {
        SECRET: process.env.JWT_SECRET || "geheim",
        COOKIE: process.env.JWT_COOKIE || "gebakken"
    },
    nodemail: {
        NM_EMAIL: process.env.NM_EMAIL,
        NM_CODE: process.env.NM_CODE,
        NM_ADDRESSEE: process.env.NM_ADDRESSEE
    }
}