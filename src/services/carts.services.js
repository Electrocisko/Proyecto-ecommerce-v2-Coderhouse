import logger from '../config/winston.config.js';
import services from '../dao/index.js';


const getAllCarts = async () => {
    try {
        let data = await services.cartsService.getAll();
        return data;
    } catch (error) {
        logger.log('error',`Error in Cart services gett All ${error}`)
    }
};

const saveCart = async () => {
    try {
       let result =  await services.cartsService.saveCart();
    return result
    } catch (error) {
        logger.log('error',`Error in carts.services save ${error}`)
    } 
};

const getCartById = async (id) => {
    try {
        let cart = await services.cartsService.getById(id);
        if (cart !== null) {return cart}
        else { return {message: '"non existent cart"'}}

    } catch (error) {
        logger.log('error',`Error in carts.services get by ID${error}`)
    }
};

const deleteCartById = async (id) => {
    try {
        let result = await services.cartsService.deleteById(id);
        if (result === false) return { message: 'error in deleting cart'}
        else { return result}
    } catch (error) {
        logger.log('error',`Error in carts.services delete by ID${error}`)
    }
};

const updateCart = async (id,newData) => {
    try {
        let result = await services.cartsService.update(id,newData);
        return result
    } catch (error) {
        logger.log('error',`Error in carts.services update by ID${error}`)
    }
};

const getPopulateCart = async (id) => {
    try {
        let result = await services.cartsService.getByIdAndPopulate(id);
        return result;
    } catch (error) {
        logger.log('error',`Error in carts.services get populate by ID${error}`)
    }
}




export {
    getAllCarts,
    saveCart,
    getCartById,
    deleteCartById,
    updateCart,
    getPopulateCart
}