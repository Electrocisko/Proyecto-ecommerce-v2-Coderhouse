import { fileURLToPath } from "url";
import { dirname } from "path";
import logger from "../config/winston.config.js";
import path from 'path';
import bcrypt from 'bcrypt';

export const createHash = async(password) => {
        const salts = await bcrypt.genSalt(10);
        return bcrypt.hash(password,salts)
};

export const isValidPassword = (user,data) => bcrypt.compare(data,user.password);


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.join(dirname(__filename),'../')

logger.log('debug',`Dirname: ${__dirname} `)

export default __dirname;