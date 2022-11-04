import logger from "../config/winston.config.js";
import services from "../dao/index.js";

const getAllProducts = async () => {
    try {
        let data = await services.productsService.getAll();
        return data
    } catch (error) {
        logger.log('error',`Error in products.services get All ${error}`)
    }
};

const saveProducts = async (data) => {
    await services.productsService.save(data);
    return data
};

const getProductById = async (id) => {
    try {
        let product = await services.productsService.getById(id);
        return product
    } catch (error) {
        logger.log('error',`Error in products.services get by ID${error}`)
    }
};

const deleteProductById = async (id) => {
    try {
        let result = await services.productsService.deleteById(id);
        return result;
    } catch (error) {
        logger.log('error',`Error in products.services delete by ID${error}`)
    }
};

const updateProduct = async (id,newData) => {
    try {
        let result = await services.productsService.update(id,newData);
        return result
    } catch (error) {
        logger.log('error',`Error in products.services update by ID${error}`)
    }
}

export {
    getAllProducts,
    saveProducts,
    getProductById,
    deleteProductById,
    updateProduct
}