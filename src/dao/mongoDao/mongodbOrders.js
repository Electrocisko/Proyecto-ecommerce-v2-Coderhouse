import MongoDBcontainer from "./mongodbContainer.js";
import {  collection, orderSchema } from '../models/order.model.js';

export default class MongoOrders extends MongoDBcontainer {
    constructor () {
        super( collection, orderSchema )
    };

    getByOrderNro = async (order) => {
        let result = await this.model.findOne({ orderNro: order });
        return result;
    };

    getLastorder = async () => {
        let result = await this.model.find().limit(1).sort({$natural:-1});
        return result;
    };

    dropOrders = async () => {
        let result = await this.model.drop();
        return result;
    }
}

