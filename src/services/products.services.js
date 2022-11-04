import logger from "../config/winston.config.js";
import services from "../dao/index.js";

const getAllProducts = async () => {
    try {
        let data = await services.productsService.getAll();
        return data
    } catch (error) {
        logger.log('error',`Error in userservices ${error}`)
    }
};

const saveProducts = async (data) => {
    await services.productsService.save(data);
    return data
}

export {
    getAllProducts,
    saveProducts
}