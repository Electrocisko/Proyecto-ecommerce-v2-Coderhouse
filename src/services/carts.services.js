import logger from "../config/winston.config.js";
import services from "../dao/index.js";

const getAllCarts = async () => {
    try {
        let data = await services.cartsService.getAll();
        return data
    } catch (error) {
        logger.log('error',`Error in carts.services get All ${error}`)
    }
};

const saveCarts = async (data) => {
    try {
        await services.productsService.save(data);
    return data
    } catch (error) {
        logger.log('error',`Error in products.services save ${error}`)
    } 
};


export { 
    getAllCarts,
    saveCarts
}