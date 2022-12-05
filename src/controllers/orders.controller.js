import logger from "../config/winston.config.js";
import { getAllOrders, saveOrder, getLastOrder, getOrderByNro } from '../services/orders.services.js';


const getOrdersController = async (req,res) => {
    try {
        let result = await getAllOrders();
        return res.status(200).send(result);
    } catch (error) {
        logger.log("error", `Error in getOrdersController ${error} `);
        res.status(500).send({ error: error, message: "couldnt get orders" });
    };
};

const saveOrderController = async (req,res) => {
    try {
        const  order   = req.body;
        let counter = await getLastOrder();
        order.orderNro =  counter[0].orderNro + 1;
        let result = await saveOrder(order);
        return res.status(200).send(result);
    } catch (error) {
        logger.log("error", `Error in saveOrderController ${error} `);
        res.status(500).send({ error: error, message: "couldnt save order" });
    };
};

const getByOrderNroController = async (req, res) => {
    try {
        const { order } = req.params;
        let data = await getOrderByNro(order);
        if (!data)
        return res
          .status(400)
          .send({ status: "error", error: "nonexistent order" })
        return res.status(200).send(data);
    } catch (error) {
        logger.log("error", `Error in getByOrderNroController ${error} `);
        res.status(500).send({ error: error, message: "couldnt get order by Number" });
    };
};


export {
    getOrdersController,
    saveOrderController,
    getByOrderNroController
}