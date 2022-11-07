import logger from '../config/winston.config.js';
import services from '../dao/index.js';
import { getAllCarts, saveCarts } from '../services/carts.services.js';

const getCartsControllers = async (req,res) => {
    try {
        let result = await getAllCarts();
        return res.json(result);
    } catch (error) {
        logger.log('error',`Error en Get Carts Controller get  ${error}`)
    }
};

const postCartsControllers = async (req,res) => {
    try {
        let newCart = {
            products: [],
            userId: req.body.userId // associate the cart with the user id
          };
        let cart = await services.cartsService.save(newCart)  
        return res.status(201).send({
            message: "Carrito agregado",
            cart: cart,
          });  
    } catch (error) {
        logger.log('error',`Error en  Post Carts Controller ${error}`)
    }

}

export {
    getCartsControllers,
    postCartsControllers
}